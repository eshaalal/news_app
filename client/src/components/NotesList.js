import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteItem from './NoteItem';

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await axios.get('/api/notes');
      setNotes(response.data);
    };
    fetchNotes();
  }, []);

  return (
    <div>
      {notes.map((note, index) => (
        <NoteItem key={index} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
