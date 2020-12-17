const path = require('path');
// imports router method from Express
const router = require('express').Router()

// spits out the index html file on root
router.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
})

// spits out the notes html file on /notes
router.get('/notes', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
})

// exports these router apis.
module.exports = router;