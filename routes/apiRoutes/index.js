const router = require('express').Router();
const { createNote, validateNote, deleteById } = require('../../lib/notes');
const { notes } = require('../../db/db')
const createId = require('create-id');

// for retreiving notes from the databas
router.get('/notes', (_req, res) => {
  res.json(notes);
})

// For saving notes to the database
router.post('/notes', (req, res) => {
  req.body.id = createId();
  if (validateNote(req.body)) {
    const note = createNote(req.body, notes);
    res.json(note);
  } else {
    res.status(400).send("The note isn't complete!");
  }
})

// for deleting notes in the database
router.delete('/notes/:id', (req, res) => {
  const newNotesArray = deleteById(req.params.id, notes);
  res.json(newNotesArray);
})

// export router
module.exports = router;

