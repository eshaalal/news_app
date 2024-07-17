const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');

// Get all notes
router.get('/', notesController.getAllNotes);

// Add a new note
router.post('/', notesController.addNote);

module.exports = router;
