// Importing the 'dotenv' library to access environment variables 
require('dotenv').config();

// Importing the 'Sequelize' library for accessing a relational database
const Sequelize = require('sequelize');

// Creating a new instance of the Sequelize class, either by connecting to an external database through JAWSDB_URL or by connecting to a local database with the specified credentials
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL) // If JAWSDB_URL is defined, connect to that database
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost', // If JAWSDB_URL is not defined, connect to a local database on host 'localhost'
      dialect: 'mysql', // Specifying the database type as MySQL
      dialectOptions: {
        decimalNumbers: true, // Ensuring decimal numbers are returned accurately
      },
    });

// Exporting the sequelize object so it can be used in other files
module.exports = sequelize;