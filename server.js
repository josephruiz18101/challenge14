const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./controllers/api');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express(); // Initialize the app first

// Set up session
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Set up Handlebars.js as the template engine
const hbs = exphbs.create({});

// Set handlebars as the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Parse request body as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.use(routes);  // Use the routes from the controller

// Start the server after syncing with the database
sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.PORT || 3001, () => {
    console.log('Server running on port 3001');
  });
});
