// Importing the 'express' library and creating a new router instance
const router = require('express').Router();

// Importing the recipe routes module
const recipeRoutes = require('./recipe-routes');
//! const newRecipeRoute = require('./new-recipe-routes');
// Mounting the recipe routes module on the '/recipe' endpoint
router.use('/recipe', recipeRoutes);
//! not used yet router.use ('/new-recipe', newRecipeRoute);
// Exporting the router instance for use in other files
module.exports = router;