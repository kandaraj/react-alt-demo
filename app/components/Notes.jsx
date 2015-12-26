import React from 'react';
import Note from './Note.jsx';

export default ({notes, counter}) => {
  return (
    
    <ul className="notes">
    {notes.length} - .
    {notes.map((note) => {
      return (
        <li className="note" key={note.id}>

          <Note />

        </li>
      );
    })}
    </ul>
  );
}
