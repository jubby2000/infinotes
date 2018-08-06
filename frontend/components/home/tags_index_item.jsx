import React from 'react';

const TagsIndexItem = ({ tag, handleFilter, openModal, deleteTag }) => {
  return (
    <li key={`tag-${tag.id}`}>
      <div className="tag-button" onClick={() => handleFilter(tag)}>
        <p className="tag-title">{tag.name}</p>
        <p className="tag-notes-count">{tag.note_count}</p>
      </div>
      <div className="tag-actions">
        <div className="tag-edit-icon" onClick={() => openModal("edit-tag", tag)}></div>
        <div className="tag-delete-icon" onClick={() => deleteTag(tag.id)}></div>
      </div>
    </li>
  );
};

export default TagsIndexItem;