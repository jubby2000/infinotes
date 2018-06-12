import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

class NotesIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllNotes();
  }

  setTime(date) {
    TimeAgo.locale(en);
    const timeAgo = new TimeAgo('en-US');
    return timeAgo.format(date);
  }

  render() {
    return (
      <div className="notes-container">
        <div className="notes-header">
          <h2>Notes</h2>
          <p>{this.props.notes.length} {this.props.notes.length === 1 ? 'note' : 'notes' }</p>
        </div>
        <ul className="note-list">
          {this.props.notes.reverse().map(note => (
            <li key={note.id}>
              <div className="note-header-container">
                <div className="note-title-container">
                  <p className="note-title">{note.title}</p>
                  <p className="note-updated">{this.setTime(Date.parse(note.updated_at))}</p>
                </div>
                <div className="note-actions">
                  <div className="note-delete-icon" onClick={() => this.props.deleteNote(note.notebookId, note.id)}></div>
                </div>
              </div>
              <p className="note-body-snippet">{note.body}</p>
            </li>
          )
          )}
        </ul>

      </div>
    );
  }
}

export default NotesIndex;