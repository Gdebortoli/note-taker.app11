const fs = require("fs");
const path = require("path");

// Create New Note 
function createNewNote(body, notesArray) {
	const note = body;
	notesArray.push(note);
	fs.writeFileSync(
		path.join(__dirname, '../data/notes.json'),
		JSON.stringify({ note: notesArray }, null, 2)
	);
	// return finished code to POST route for response
    console.log(`New note added!`);
	return note;
}

// Validate Note Data
function validateNote(note) {
	if (!note.title || typeof note.title !== 'string') {
		return false;
	}
	if (!note.text || typeof note.text !== 'string') {
		return false;
	}
	return true;
}

module.exports = {
    createNewNote,
    validateNote,
}; 