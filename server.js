// import express
const express = require('express');  
// import routes from the controllers folder
const routes = require('./controllers');  
// import sequelize connection
const sequelize = require('./config/connection');  
// import express-handlebars
const exphbs = require('express-handlebars');  
// create handlebars instance
const hbs = exphbs.create({});  
// import path
const path = require('path');  
// create express server
const app = express();  
// set port
const PORT = process.env.PORT || 3001;  

// ===== Middleware =====
// setting up the handlebars template engine to be used with the Express.js framework
app.engine('handlebars', hbs.engine); 
// setting the view engine for the Express.js app to use handlebars
app.set('view engine', 'handlebars');  
// setting up the views folder as a static folder
app.use(express.static(path.join(__dirname, 'public')));  
// setting up the recipe routes as the default route
app.use(require('./controllers/recipe-routes'));  
//! not used yet... needs middleware to stop error app.use(require('./controllers/new-recipe-routes'));
// Using express middleware to parse incoming JSON data
app.use(express.json());
// Using express middleware to parse URL encoded data, including data from HTML forms
app.use(express.urlencoded({ extended: true }));
// Using the application routes defined in the routes file
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});