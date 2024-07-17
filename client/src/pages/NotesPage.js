// client/src/pages/NotesPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteItem from '../components/NoteItem'; // Assuming NoteItem is a component to render each note

const NotesPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('/api/notes'); // Make sure this matches your backend route
        setNotes(response.data);
      } catch (error) {
        console.error('Failed to fetch notes:', error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div>
      <h1>Notes Page</h1>
      <div>
        {notes.map(note => (
          <NoteItem key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesPage;
