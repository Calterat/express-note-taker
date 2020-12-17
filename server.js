const express = require('express');
const { notes } = require('./db/db');
const createId = require('create-id');
const fs = require('fs');
const path = require('path');

const app = express();

// use all assests in the public folder
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

const createNote = (body, notesArray) => {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify({ notes: notesArray }, null, 2));
  return note;
}

const validateNote = (note) => {
  if(!note.id || typeof note.id !== 'string') {
    return false;
  }
  if (!note.title || typeof note.title !== 'string') {
    return false;
  }
  if (!note.text || typeof note.title !== 'string') {
    return false;
  }
  return true;
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
})

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
})

app.get('/api/notes', (req, res) => {
  res.json(notes);
})

app.post('/api/notes', (req, res) => {
  req.body.id = createId();
  if (validateNote(req.body)) {
    const note = createNote(req.body, notes);
    res.json(note);
  } else {
    res.status(400).send("The note isn't complete!");
  }
})

app.delete('/api/notes', (req, res) => {
  console.log(req);
})

const PORT = process.env.PORT || 3001;

app.listen(3001, () => {
  console.log(`API server now on port ${PORT}!`);
})