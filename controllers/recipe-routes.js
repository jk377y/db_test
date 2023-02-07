// Importing the 'express' library and creating a new router instance
const router = require('express').Router();

// Importing the Recipe model for accessing and manipulating recipe data in the database
const Recipe = require('../models/recipe.js');

// Route for retrieving all recipes from the database and rendering them in an 'allRecipes' template
router.get('/', async (req, res) => {
   try {
      // Querying the Recipe model for all recipes, returning only the recipeName and id attributes
      const recipeData = await Recipe.findAll({
         attributes: ['recipeName', 'id'],
      });
      // Mapping the recipe data to plain objects to remove any metadata
      const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
      // Rendering the 'allRecipes' template and passing the mapped recipe data as the 'recipes' argument
      res.render('allRecipes', { recipes });
   } catch (err) {
      // Logging any errors that occur and returning a JSON response with a 500 status code and an error message
      console.error(err);
      res.status(500).json({error: err.message});
   }
});

// Route for retrieving a specific recipe from the database by its id and rendering it in a 'recipe' template
router.get('/:id', async (req, res) => {
   try {
      // Querying the Recipe model for a recipe with the specified id
      const recipeData = await Recipe.findByPk(req.params.id);
      // Mapping the recipe data to a plain object to remove any metadata
      const recipe = recipeData.get({ plain: true });
      // Rendering the 'recipe' template and passing the mapped recipe data as the 'recipe' argument
      res.render('recipe', recipe);
   } catch (err) {
      // Logging any errors that occur and returning a JSON response with a 500 status code and an error message
      console.error(err);
      res.status(500).json({error: err.message});
   }
});




// Route for creating a new recipe in the database
router.post('/', async (req, res) => {
   try {
      // Creating a new recipe using the Recipe model and passing in the request body data
      const recipeData = await Recipe.create(req.body);
      // Returning a JSON response with a 200 status code and the created recipe data
      res.status(200).json(recipeData);
   } catch (err) {
      // Logging any errors that occur and returning a JSON response with a 400 status code and an error message
      console.error(err);
      res.status(400).json({error: err.message});
   }
});

// Exporting the router instance for use in other files
module.exports = router;