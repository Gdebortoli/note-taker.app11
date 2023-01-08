// Requiring Express 
const express = require('express'); 
// Requiring file systems and file paths
const app = express(); 

// Instantiating Server
const PORT = process.env.PORT || 3001; 
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// JS AND CSS files
app.use(express.static('public'));
// Routes
app.use(require("./routes"));

// Ask server to listen for requests 
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});