import React from 'react';

const NotesIndexItem = ({ note, activeNoteId, setTime, updateActiveNote, handleDeleteNote }) => {
  return (
    <li key={note.id} className={note.id === activeNoteId ? 'active-note' : ''} onClick={() => updateActiveNote(note)}>
      <div className="note-header-container">
        <div className="note-title-container">
          <p className="note-title">{note.title}</p>
          <p className="note-updated">{setTime(Date.parse(note.updated_at))}</p>
        </div>
        <div className="note-actions">
          <div className="note-delete-icon" onClick={() => handleDeleteNote(note)}></div>
        </div>
      </div>
      <p
        className="note-body-snippet"
        dangerouslySetInnerHTML={{ __html: note.body.replace(/<\/?[^>]+(>|$)/g, "") }}
      ></p>
    </li>
  );
};

export default NotesIndexItem;