import React from 'react';
import Note from './Note';
import { useSelector } from 'react-redux';

const NoteGrid = () => {
  const notes = useSelector((state) => state.notes);

  return notes.map((note) => (
    <Note
      key={note.id}
      id={note.id}
      title={note.title}
      content={note.content}
    />
  ));
};

export default NoteGrid;
