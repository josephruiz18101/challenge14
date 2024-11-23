const { Sequelize, DataTypes } = require('sequelize');

// Replace 'your_database', 'username', 'password', and 'host' with your actual database details
const sequelize = new Sequelize({
  dialect: 'postgres', // or 'mysql', 'sqlite', etc.
  host: 'localhost',    // replace with your DB host if necessary
  username: 'postgres',  // replace with your DB username
  password: 'Lovebsdraco18101',  // replace with your DB password
  database: 'tech_blog_db',  // replace with your DB name
});

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
});

module.exports = { Post, sequelize };
