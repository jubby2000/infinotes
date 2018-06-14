import React from 'react';

class TagsIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllTags();
  }

  render() {
    const letters = [];
    this.props.tags.forEach(tag => {
      if (!letters.includes(tag.name.charAt(0).toUpperCase())) {
        letters.push(tag.name.charAt(0).toUpperCase());
      }
    });
    return (
      <div>
        <div className="tags-header">
          <h2>Tags</h2>
          <button
            className="add-tag"
            onClick={() => this.props.openModal("add-tag")}></button>
        </div>
        <ul className="tags-list-container">
          {letters.sort().map((letter, idx) => (
            <div>
              <li className="tag-letter-header" key={`letter-${idx}`}>{letter}
                <ul className="tag-list">
                  {this.props.tags.map(tag => {
                    return (tag.name.charAt(0) === letter ? (
                    <li key={tag.id}>
                      <div className="tag-button">
                        <p className="tag-title">{tag.name}</p>
                        <p className="tag-notes-count">{tag.note_count}</p>
                      </div>
                      <div className="tag-actions">
                        <div className="tag-edit-icon" onClick={() => this.props.openModal("edit-tag", tag)}></div>
                        <div className="tag-delete-icon" onClick={() => this.props.deleteTag(tag.id)}></div>
                      </div>
                    </li>
                    ) : '' );
                  }
                  
                  )}
                </ul>
              </li>
            </div>
          ))}
        </ul>

      </div>
    );
  }
}

export default TagsIndex;