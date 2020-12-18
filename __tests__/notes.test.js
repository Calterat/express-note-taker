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