
// For joining data
const path = require('path');
// Express
const router = require('express').Router(); 


//Index.html route - HOMEPAGE
router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Notes.html route - NOTES DISPLAYED

router.get('/notes', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/notes.html'));
});


module.exports = router; 