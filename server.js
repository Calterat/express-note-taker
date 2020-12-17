const express = require('express');
const { notes } = require('./db/db');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/notes', (req, res) => {
  console.log(req.query);
  res.json(notes);
})

app.listen(3001, () => {
  console.log(`API server now on port ${PORT}!`);
})