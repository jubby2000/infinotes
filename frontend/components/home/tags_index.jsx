import React from 'react';

class TagsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    this.props.getAllTags();
  }

  handleFilter(tag) {
    this.props.getTagNotes(tag.id)
    .then(() => this.props.addFilter("tags", tag))
    .then(() => this.props.closePanelModal("tag"));
    
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
            <div key={`container-${idx}`}>
              <li className="tag-letter-header">{letter}
                <ul className="tag-list">
                  {this.props.tags.map(tag => {
                    return (tag.name.charAt(0).toUpperCase() === letter ? (
                    <li key={`tag-${tag.id}`}>
                      <div className="tag-button" onClick={() => this.handleFilter(tag)}>
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