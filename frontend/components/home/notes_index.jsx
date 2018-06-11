import React from 'react';

class NotesIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllNotes();
  }

  render() {
    return (
      <div className="notes-container">
        <div className="notes-header">
          <h2>Notes</h2>
        </div>
        <ul className="note-list">
          {this.props.notes.map(note => (
            <li key={note.id}>
              <div>
                <p className="note-title">{note.title}</p>
                <p className="note-updated">{note.updated_at}</p>
              </div>
              <div className="note-actions">
                <div className="delete-icon" onClick={() => this.props.deleteNote(note.notebookId, note.id)}></div>
              </div>
            </li>
          )
          )}
        </ul>

      </div>
    );
  }
}

export default NotesIndex;