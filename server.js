// Requiring file system
const fs = require('fs');
// Requiring path 
const path = require('path'); 
// Requiring Express 
const express = require('express'); 

// Requiring 

// Instantiating Server (step 1)
const app = express(); 
const PORT = process.env.PORT || 3001; 
// Parse incoming JSON data
app.request(express.json());
// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// JS AND CSS file middleware
app.use(express.static('public'));

// Queries 



// Validations 



// GET requests 



// POST requests



// Ask server to listen for requests (step 2 - stays last on the page)
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});