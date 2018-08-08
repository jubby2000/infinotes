import React from 'react';

const NotebooksIndexItem = ({ notebook, openModal, deleteNotebook, handleFilter }) => {
  return (
    <li key={notebook.id} onClick={() => handleFilter(notebook)}>
      <div>
        <p className="notebook-title">{notebook.title}</p>
        <p className="notes-count">{notebook.note_count} {notebook.note_count === 1 ? 'note' : 'notes'}</p>
      </div>
      <div className="notebook-actions">
        <div className="edit-icon" onClick={() => openModal("edit-notebook", notebook)}></div>
        <div className="delete-icon" onClick={() => deleteNotebook(notebook.id)}></div>
      </div>
    </li>
  );
};

export default NotebooksIndexItem;