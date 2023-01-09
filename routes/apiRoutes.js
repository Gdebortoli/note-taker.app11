const router = require('express').Router()
const fs = require('fs')
const path = require('path')
// Requiring information from db
const notes = require('../db/notes.json')
// for unique note id
const { v4: uuidv4 } = require('uuid')

// GET all notes
router.get('/notes', (req, res) => {
  res.send(notes)
})
// POST/create a note
router.post(
  '/notes',
  ('/notes',
  (req, res) => {
    const { title, text } = req.body
    const newNote = {
      title,
      text,
      id: uuidv4(),
    }
    notes.push(newNote)
    // write the notes
    fs.writeFileSync(
      path.join(__dirname, '../db/notes.json'),
      JSON.stringify(notes, null, 2),
    )
    return res.json(notes)
  }),
)

// DELETE a note
router.delete('/notes/:id', (req, res) => {
  const id = req.params.id
  const index = notes.findIndex((note) => note.id === id)
  notes.splice(index, 1)

  fs.writeFileSync(
    path.join(__dirname, '../db/notes.json'),
    JSON.stringify(notes, null, 2),
  )
  return res.json(notes)
})

module.exports = router
