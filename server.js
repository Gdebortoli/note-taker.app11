// Requiring file systems and file paths
const fs = require('fs');
const path = require('path'); 
// Requiring Express 
const express = require('express'); 

// Instantiating Server (step 1)
const app = express(); 
const PORT = process.env.PORT || 3001; 

// Parse incoming JSON data
// app.request(express.json());
// Routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// JS AND CSS file middleware
app.use(express.static('public'));
// Endpoint routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// Ask server to listen for requests (step 2 - stays last on the page)
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});