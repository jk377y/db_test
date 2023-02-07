// Import the recipe seed data
const seedRecipes = require('./recipe-seeds');

// Import the database connection configuration
const sequelize = require('../config/connection');

// Define a function to seed the database
const seedDb = async () => {
// Synchronize the database and erase all previous data
await sequelize.sync({ force: true });
console.log('\n----- DATABASE SYNCED -----\n');

// Call the function to seed the database with recipe data
await seedRecipes();
console.log('\n----- RECIPES SEEDED -----\n');

// Exit the process
process.exit(0);
};

// Call the function to seed the database
seedDb();