const fs = require('fs');
const path = require('path');

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

const deleteById = (id, notesArray) => {
  const deleted = notesArray.splice(notesArray.findIndex(obj => obj.id === id), 1);
  fs.writeFileSync('./db/db.json', JSON.stringify({ notes: notesArray }, null, 2));
  return notesArray;
}

module.exports = { createNote, validateNote, deleteById }