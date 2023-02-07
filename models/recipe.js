// Import the "Model" and "DataTypes" classes from the "sequelize" package
const { Model, DataTypes } = require("sequelize");

// Import the "sequelize" connection object from the connection configuration file
const sequelize = require("../config/connection.js");

// Define a new "Recipe" model class that extends the "Model" class
class Recipe extends Model {}

// Initialize the "Recipe" model with its attributes and options
Recipe.init(
   {
      // Define the "id" attribute as an integer, with a primary key and auto-increment enabled
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      // Define the "recipeName" attribute as a string, not allowing null values
      recipeName: {
         type: DataTypes.STRING,
         allowNull: false
      },
      // Define the "ingredients" attribute as text, not allowing null values
      ingredients: {
         type: DataTypes.TEXT,
         allowNull: false
      },
      // Define the "prepInstructions" attribute as text, not allowing null values
      prepInstructions: {
         type: DataTypes.TEXT,
         allowNull: false
      },
      // Define the "totalPrepTime" attribute as an integer, not allowing null values
      totalPrepTime: {
         type: DataTypes.INTEGER,
         allowNull: false
      },
      // Define the "cookInstructions" attribute as text, not allowing null values
      cookInstructions: {
         type: DataTypes.TEXT,
         allowNull: false
      },
      // Define the "totalCookTime" attribute as an integer, not allowing null values
      totalCookTime: {
         type: DataTypes.INTEGER,
         allowNull: false
      },
      // Define the "picture" attribute as text, allowing null values
      picture: {
         type: DataTypes.TEXT,
         allowNull: true
      }
   },
   {
      // Pass the "sequelize" connection object to the model options
      sequelize,
      // Disable timestamps for the model
      timestamps: false,
      // Freeze the table name to the model name, using underscore syntax
      freezeTableName: true,
      underscored: true,
      // Set the model name as "Recipe"
      modelName: 'Recipe',
   }
);

// Export the "Recipe" model
module.exports = Recipe;
