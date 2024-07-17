const Note = require('../models/Note');

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch notes', error });
  }
};

const addNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({
      title,
      content,
    });
    await newNote.save();
    res.json(newNote);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add note', error });
  }
};

module.exports = { getAllNotes, addNote };
