import React from 'react';
import ReactQuill from 'react-quill';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {note: props.note, changes: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleHTMLChange = this.handleHTMLChange.bind(this);
    this.clearNoteErrors = this.clearNoteErrors.bind(this);
    this.defaultState = this.state;
  }

  componentDidMount() {
    this.props.getAllTags();
    this.props.getAllTaggings();
  }

  handleSubmit(e) {
    e.preventDefault();
    const noteTitle = document.getElementById('note-edit-form-title');
    const noteBody = document.getElementById('note-edit-form-body');
    noteTitle.blur();
    noteBody.blur();
    this.props.updateNote(this.state.note.notebook_id, this.state.note)
    .then(() => this.setState({note: this.state.note, changes: false }));
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.note.id !== nextProps.note.id && nextProps.note.id !== undefined){
      this.setState({ note: nextProps.note, changes: false });
    }
  }

  update(field) {
    return e => this.setState({ 
      note: Object.assign({}, 
        this.state.note, 
        { [field]: e.target.value }), 
      changes: true});
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((err, idx) => (
          <li key={`err-${idx}`}>{err}</li>
        ))}
      </ul>
    );
  }

  clearNoteErrors() {
    if (this.props.errors.length > 0) {
      this.props.clearNoteErrors();
    }
  }

  handleHTMLChange(value) {
      this.setState({
        note: Object.assign({},
          this.state.note,
          { body: value }),
        changes: true
      });
  }

  render() {
    let disabled = this.state.changes === false ? true : false;
    return (
      <div className="note-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="note-edit-container">
            <ul className="tags-container">
              <div className="tag-icon-small"></div>
              {this.props.tags.map(tag => (
                <li key={tag.id} className="tag-list-item">{tag.name}</li>
              ))}
              <div className="add-tag-button" onClick={() => this.props.openModal("add-tag")}>
                <p>+</p>
              </div>
            </ul>
            <div className="note-edit-header">
              <input
                id="note-edit-form-title"
                className="note-edit-form-title"
                value={this.state.note.title || ''}
                onFocus={this.clearNoteErrors}
                onChange={this.update("title")}
                type="text" />
              <input
                className="note-edit-submit"
                disabled={disabled}
                value={disabled ? "No changes" : "Save"}
                type="submit"/>
            </div>
            <div className="note-errors-container">
              {this.renderErrors()}
            </div>
            <ReactQuill
              id="note-edit-form-body"
              modules={Note.modules}
              formats={Note.formats}
              className="note-edit-form-body"
              onFocus={this.clearNoteErrors}
              value={this.state.note.body || ''}
              onChange={this.handleHTMLChange} />
          </div>    
        </form>

      </div>
    );
  }
}

Note.modules = {
  toolbar: [
    [{ 'header': ['1', '2', '3'] }, { 'font': [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' },
    { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
};
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Note.formats = [
  'header', 'font', 'code',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
];

export default Note;