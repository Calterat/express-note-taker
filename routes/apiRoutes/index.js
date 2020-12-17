const router = require('express').Router();
const { createNote, validateNote, deleteById } = require('../../lib/notes');
const { notes } = require('../../db/db')
const createId = require('create-id');

router.get('/notes', (req, res) => {
  res.json(notes);
})

router.post('/notes', (req, res) => {
  req.body.id = createId();
  if (validateNote(req.body)) {
    const note = createNote(req.body, notes);
    res.json(note);
  } else {
    res.status(400).send("The note isn't complete!");
  }
})

router.delete('/notes/:id', (req, res) => {
  const newNotesArray = deleteById(req.params.id, notes);
  res.json(newNotesArray);
})

module.exports = router;

