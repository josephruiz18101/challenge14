const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,  // Database name from .env
  process.env.DB_USER,  // Database user from .env
  process.env.DB_PASSWORD, // Database password from .env
  {
    host: process.env.DB_HOST,  // Database host from .env
    dialect: 'postgres', // Dialect should be postgres for PostgreSQL
    port: process.env.DB_PORT,  // Database port from .env
    logging: false,  // Turn off logging (optional)
  }
);

module.exports = sequelize;
