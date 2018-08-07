import React from 'react';

const NotesIndexHeader = ({ notesTotal, activeFilter, handleRemoveFilter, payload }) => {
  return (
    <div className="notes-header">
      <h2>Notes</h2>
      <div className="header-detail-container">
        <p>{notesTotal} {notesTotal === 1 ? 'note' : 'notes'}</p>
        {activeFilter === "tags" ? (
          <div className="filter-container" onClick={() => handleRemoveFilter("tags")}>
            <div className="tag-icon-small"></div>
            <p>{payload.name} &times;</p>
          </div>
        ) : activeFilter === "notebook" ? (
          <div className="filter-container" onClick={() => handleRemoveFilter("notebook")}>
            <div className="notebook-icon-small"></div>
            <p>{payload.title} &times;</p>
          </div>
        ) : ""}
      </div>
    </div>
  );
};

export default NotesIndexHeader;