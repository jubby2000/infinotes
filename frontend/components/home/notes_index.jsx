import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import NoteContainer from './note_container';
import Loading from './loading';
import NotesIndexItem from './notes_index_item';
import NotesIndexHeader from './notes_index_header'; 

class NotesIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {activeNote: {id: null}, activeFilter: {}, loading: false};
    this.handleRemoveFilter = this.handleRemoveFilter.bind(this);
    this.updateActiveNote = this.updateActiveNote.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.activeFilter !== nextProps.filter && nextProps.filter !== null) {
      this.setState({ activeNote: nextProps.notes[0], activeFilter: nextProps.filter });
    } else if ((this.state.activeFilter === "tags" || this.state.activeFilter === "notebook") && nextProps.filter === null) {
      this.setState({ activeNote: nextProps.notes[0], activeFilter: {} });
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.getAllNotes()
    .then(res => {
      return this.setState({ activeNote: Object.values(res.notes)[0], loading: false });
    });
  }

  handleRemoveFilter(type) {
    this.props.removeFilter(type);
    this.props.getAllNotes();
  }

  handleDeleteNote(note) {
    this.props.deleteNote(note.notebookId, note.id)
    .then(() => this.props.getAllNotes())
    .then((res) => this.setState({ activeNote: Object.values(res.notes)[0] }));
  }

  setTime(date) {
    TimeAgo.locale(en);
    const timeAgo = new TimeAgo('en-US');
    return timeAgo.format(date);
  }

  updateActiveNote(note) {
    this.setState({ activeNote: note });
  }

  header() {
    return (
      <div className="notes-main">
        <div className="notes-container">
          <NotesIndexHeader
            notesTotal={this.props.notes.length}
            handleRemoveFilter={this.handleRemoveFilter}
            payload={this.props.payload}
            activeFilter={this.state.activeFilter}
          />
          <div className="empty-note-index">
            <div className="empty-note-icon"/>
            <p className="empty-note-text">Click <span className="add-note-icon"></span> to add a note.</p>
          </div>
        </div>
        <NoteContainer />
      </div>
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <Loading />
      );
    } else if (this.props.notes.length === 0) {
      return (
        this.header()
      );
    } else {
      this.state.activeNote = this.state.activeNote || this.props.notes[0];
      return (
        <div className="notes-main">
          <div className="notes-container">
            <NotesIndexHeader
              notesTotal={this.props.notes.length}
              handleRemoveFilter={this.handleRemoveFilter}
              payload={this.props.payload}
              activeFilter={this.state.activeFilter}
            />
            <ul className="note-list">
              {this.props.notes.map(note => (
                <NotesIndexItem
                  key={note.id}
                  note={note}
                  activeNoteId={this.state.activeNote.id}
                  updateActiveNote={this.updateActiveNote}
                  setTime={this.setTime}
                  handleDeleteNote={this.handleDeleteNote}
                />
              )
              )}
            </ul>
          </div>
          <NoteContainer note={this.state.activeNote} />
        </div>
      );
    }
  }
}

export default NotesIndex;