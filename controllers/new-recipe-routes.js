//! This file is not currently being used. It is a work in progress.



// Importing the 'express' library and creating a new router instance
// const router = require('express').Router();

// router.get('/newRecipe', async (req, res) => {
//     try {
//        // Render the 'newRecipe' handlebars file
//        res.render('newRecipe', { recipes });
//     } catch (err) {
//        // Log any errors that occur and return a JSON response with a 500 status code and an error message
//        console.error(err);
//        res.status(500).json({error: err.message});
//     }
//  });

// router.post('/', async (req, res) => {
//     try {
//        // Destructuring the request body to retrieve the form data
//        const { recipeName, ingredients, prepInstructions, totalPrepTime, cookInstructions, totalCookTime, picture } = req.body;
//        // Check if required fields are present
//        if (!recipeName || !ingredients || !prepInstructions || !totalPrepTime || !cookInstructions || !totalCookTime) {
//           // If required fields are missing, return an error message
//           return res.status(400).json({error: 'Please fill out all required fields'});
//        }
//        // Create a new recipe object with the form data
//        const newRecipe = await Recipe.create({
//           recipeName,
//           ingredients,
//           prepInstructions,
//           totalPrepTime,
//           cookInstructions,
//           totalCookTime,
//           picture
//        });
//        // Return a success message to the user
//        return res.status(200).json({message: 'Recipe successfully added'});
//     } catch (err) {
//        // Log any errors that occur and return a JSON response with a 500 status code and an error message
//        console.error(err);
//        res.status(500).json({error: err.message});
//     }
//  });


// module.exports = router;