import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import NoteContainer from './note_container';
import Loading from './loading'; 

class NotesIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {activeNote: {id: null}, activeFilter: {}, loading: false};
    this.handleRemoveFilter = this.handleRemoveFilter.bind(this);
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

  header() {
    return (
      <div className="notes-main">
        <div className="notes-container">
          <div className="notes-header">
            <h2>Notes</h2>
            <div className="header-detail-container">
              <p>{this.props.notes.length} {this.props.notes.length === 1 ? 'note' : 'notes'}</p>
              {this.state.activeFilter === "tags" ? (
                <div className="filter-container" onClick={() => this.handleRemoveFilter("tags")}>
                  <div className="tag-icon-small"></div>
                  <p>{this.props.payload.name} &times;</p>
                </div>
              ) : this.state.activeFilter === "notebook" ? (
                <div className="filter-container" onClick={() => this.handleRemoveFilter("notebook")}>
                  <div className="notebook-icon-small"></div>
                  <p>{this.props.payload.title} &times;</p>
                </div>
              ) : ""}
            </div>
          </div>
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
            <div className="notes-header">
              <h2>Notes</h2>
              <div className="header-detail-container">
                <p>{this.props.notes.length} {this.props.notes.length === 1 ? 'note' : 'notes' }</p>
                {this.state.activeFilter === "tags" ? (
                  <div className="filter-container" onClick={() => this.handleRemoveFilter("tags")}>
                    <div className="tag-icon-small"></div>
                    <p>{this.props.payload.name} &times;</p>
                  </div>
                ) : this.state.activeFilter === "notebook" ? (
                    <div className="filter-container" onClick={() => this.handleRemoveFilter("notebook")}>
                    <div className="notebook-icon-small"></div>
                    <p>{this.props.payload.title} &times;</p>
                  </div>  
                ) : ""}
              </div>
            </div>
            <ul className="note-list">
              {this.props.notes.map(note => (
                <li key={note.id} className={note.id === this.state.activeNote.id ? 'active-note' : ''} onClick={() => this.setState({ activeNote: note })}>
                  <div className="note-header-container">
                    <div className="note-title-container">
                      <p className="note-title">{note.title}</p>
                      <p className="note-updated">{this.setTime(Date.parse(note.updated_at))}</p>
                    </div>
                    <div className="note-actions">
                      <div className="note-delete-icon" onClick={() => this.handleDeleteNote(note)}></div>
                    </div>
                  </div>
                  <p 
                    className="note-body-snippet"
                    dangerouslySetInnerHTML={{ __html: note.body.replace(/<\/?[^>]+(>|$)/g, "") }}
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
}

export default NotesIndex;