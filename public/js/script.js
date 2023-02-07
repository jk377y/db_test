//! ===== Navigation buttons =====
// Get the previous and next buttons from the HTML document
const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
//! currently no function to reloop once the end of the list is reached
// Get the current recipe id from the URL
const currentRecipeId = parseInt(window.location.pathname.split('/')[1]);
// Define a function to navigate to the previous recipe
function navigateToPreviousRecipe() {
  // Decrement the current recipe id
  const previousRecipeId = (currentRecipeId - 1);
  // Redirect to the previous recipe page
  location.href = `/${previousRecipeId}`;
}
// Define a function to navigate to the next recipe
function navigateToNextRecipe() {
  // Increment the current recipe id
  const nextRecipeId = (currentRecipeId + 1);
  // Redirect to the next recipe page
  location.href = `/${nextRecipeId}`;
}
// Attach the navigation functions to the buttons
previousButton.addEventListener('click', navigateToPreviousRecipe);
nextButton.addEventListener('click', navigateToNextRecipe);


//! not used yet
// //! ===== Submit recipe form =====
// // Get the recipe form from the HTML document
// const recipeForm = document.getElementById('recipe-form');
// // Handle the form submit event
// recipeForm.addEventListener('submit', async (event) => {
//   // Prevent the default form submit behavior
//   event.preventDefault();
//   // Get the form data
//   const formData = new FormData(recipeForm);
//   const recipe = {
//     recipeName: formData.get('recipeName'),
//     ingredients: formData.get('ingredients'),
//     prepInstructions: formData.get('prepInstructions'),
//     totalPrepTime: formData.get('totalPrepTime'),
//     cookInstructions: formData.get('cookInstructions'),
//     totalCookTime: formData.get('totalCookTime'),
//     picture: formData.get('picture'),
//   };
//   try {
//     // Send a POST request to the server to create a new recipe
//     const response = await fetch('/recipe', {
//       method: 'POST',
//       body: formData,
//     });
//     // Check if the request was successful
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     // Show a success notification
//     alert('Recipe created successfully!');
//   } catch (err) {
//     // Show an error notification
//     alert(`Error: ${err.message}`);
//   }
// });

//! not used yet
// //! ===== New recipe page button =====
// document.getElementById("newRecipe").addEventListener("click", function () {
//   // Redirect to the '/newRecipe' page
//   window.location.href = '/newRecipe';
// });