import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import NoteContainer from './note_container';

class NotesIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {activeNote: {}};
  }

  // componentWillReceiveProps(nextProps) {
  //   debugger;
  // }

  componentDidMount() {
    this.props.getAllNotes()
    .then(res => this.setState({activeNote: this.props.notes[0]}));
  }

  setTime(date) {
    TimeAgo.locale(en);
    const timeAgo = new TimeAgo('en-US');
    return timeAgo.format(date);
  }

  render() {
    return (
      <div className="notes-main">
        <div className="notes-container">
          <div className="notes-header">
            <h2>Notes</h2>
            <p>{this.props.notes.length} {this.props.notes.length === 1 ? 'note' : 'notes' }</p>
          </div>
          <ul className="note-list">
            {this.props.notes.map(note => (
              <li key={note.id} className={note.id === this.state.activeNote.id ? 'active-note' : ''} onClick={() => this.setState({activeNote: note})}>
                <div className="note-header-container">
                  <div className="note-title-container">
                    <p className="note-title">{note.title}</p>
                    <p className="note-updated">{this.setTime(Date.parse(note.updated_at))}</p>
                  </div>
                  <div className="note-actions">
                    <div className="note-delete-icon" onClick={() => this.props.deleteNote(note.notebookId, note.id)}></div>
                  </div>
                </div>
                <p 
                  className="note-body-snippet"
                  dangerouslySetInnerHTML={{ __html: note.body }}
                  ></p>
              </li>
            )
            )}
          </ul>
        </div>
        <NoteContainer note={this.state.activeNote} />
      </div>
    );
  }
}

export default NotesIndex;