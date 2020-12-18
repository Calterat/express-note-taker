const { createNote, validateNote, deleteById } = require('../lib/notes');
const fs = require('fs');
const createId = require('create-id');
const { notes } = require('../db/db.json');

jest.mock('fs');

test('Create a Note', () => {
  const note = createNote({
      "id": createId(),
      "title": "Test Title",
      "text": "Test text"
  }, notes)

  expect(note.title).toBe("Test Title");
  expect(note.text).toBe("Test text");
})

test('Validates the data for the API', () => {
  const note = 
  {
    "id": createId(),
    "title": "Test Title",
    "text": "Test text"
  }

  const invalidNote = 
  {
    "id": createId(),
    "title": "Test Title"
  }

  const result1 = validateNote(note);
  const result2 = validateNote(invalidNote);

  expect(result1).toBe(true);
  expect(result2).toBe(false);
})

// test('')