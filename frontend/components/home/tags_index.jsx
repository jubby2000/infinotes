import React from 'react';

class TagsIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllTags();
  }

  render() {
    return (
      <div>
        <div className="tags-header">
          <h2>Tags</h2>
          <button
            className="add-tag"
            onClick={() => this.props.openModal("add-tag")}></button>
        </div>
        <ul className="tag-list">
          {this.props.tags.map(tag => (
            <li key={tag.id}>
              <div>
                <p className="tag-title">{tag.title}</p>
                <p className="tag-notes-count">{tag.note_count} {tag.note_count === 1 ? 'note' : 'notes'}</p>
              </div>
              <div className="tag-actions">
                <div className="edit-icon" onClick={() => this.props.openModal("edit-tag", tag)}></div>
                <div className="delete-icon" onClick={() => this.props.deleteTag(tag.id)}></div>
              </div>
            </li>
          )
          )}
        </ul>

      </div>
    );
  }
}

export default TagsIndex;