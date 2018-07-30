import React from 'react';
import ReactQuill from 'react-quill';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {note: props.note, changes: false, tag: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTagSubmit = this.handleTagSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleHTMLChange = this.handleHTMLChange.bind(this);
    this.clearNoteErrors = this.clearNoteErrors.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.handleDeleteTagging = this.handleDeleteTagging.bind(this);
    this.defaultState = this.state;
  }

  componentDidMount() {
    this.props.getAllTags()
    .then(() => this.props.getAllTaggings());
  }

  handleSubmit(e) {
    e.preventDefault();
    const noteTitle = document.getElementById('note-edit-form-title');
    const noteBody = document.getElementById('note-edit-form-body');
    noteTitle.blur();
    noteBody.blur();
    this.props.updateNote(this.state.note.notebook_id, this.state.note)
    .then(() => this.setState({note: this.state.note, changes: false, tag: '' }));
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.note.id !== nextProps.note.id && nextProps.note.id !== undefined){
      this.setState({ note: nextProps.note, changes: false, tag: '' });
    }
  }

  update(field) {
    return e => this.setState({ 
      note: Object.assign({}, 
        this.state.note, 
        { [field]: e.target.value }), 
      changes: true,
      tag: this.state.tag
    });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((err, idx) => (
          <li key={`err-${idx}`}>{err}</li>
        ))}
        {this.props.tagErrors.map((err, idx) => (
          <li key={`tagErr-${idx}`}>{err}</li>
        ))}
        {this.props.taggingErrors.map((err, idx) => (
          <li key={`taggingErr-${idx}`}>{err}</li>
        ))}
      </ul>
    );
  }

  clearNoteErrors() {
    if (this.props.errors.length > 0) {
      this.props.clearNoteErrors();
    }
    if (this.props.tagErrors.length > 0) {
      this.props.clearTagErrors();
    }
    if (this.props.taggingErrors.length > 0) {
      this.props.clearTaggingErrors();
    }
  }

  handleHTMLChange(value) {
      this.setState({
        note: Object.assign({},
          this.state.note,
          { body: value }),
        changes: true,
        tag: this.state.tag
      });
  }

  handleTagChange(){
    return e => this.setState({
      note: this.state.note,
      changes: this.state.changes,
      tag: e.target.value
    });
  }

  handleTagSubmit() {
    let tagId;
    Object.values(this.props.allTags).forEach(tag => {
      if (tag.name === this.state.tag) {
        tagId = tag.id;
      }
    });  
    const noteId = this.state.note.id;
    const addTagButton = document.getElementById('add-tag-button');
    addTagButton.blur();
    if (tagId) {
      this.props.createTagging({ tag_id: tagId, note_id: noteId })
      .then(() => this.setState({ note: this.state.note, changes: false, tag: '' }));
    } else {
      this.props.createTag({ name: this.state.tag })
      .then((res) => (
      this.props.createTagging({ tag_id: res.tag.id, note_id: noteId })
      .then(() => this.setState({ note: this.state.note, changes: false, tag: '' }))
      )     
      );
    }
  }

  handleDeleteTagging(tag) {
    this.props.taggings.forEach(tagging => {
      if (tagging.note_id === this.state.note.id && tagging.tag_id === tag.id) {
        this.props.deleteTagging(tagging.id);
      }
    });
  }

  emptyNote() {
    return (
      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "center"}} className="note-form-container">
            <svg width="30%" height="30%" aria-hidden="true" data-prefix="fas" data-icon="align-right" className="svg-inline--fa fa-align-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#F8F8F8" d="M160 84V44c0-8.837 7.163-16 16-16h256c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H176c-8.837 0-16-7.163-16-16zM16 228h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 256h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm160-128h256c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H176c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
      </div>
    );
  }

  render() {
    let disabled = this.state.changes === false ? true : false;
    if (this.state.note.id === null) {
      return this.emptyNote();
    } else {
      return (
        <div>
          <ul className="tags-container">
            <div className="tag-icon-small"></div>
            {this.props.tags.map(tag => (
              <li 
                key={tag.id} 
                onClick={() => this.handleDeleteTagging(tag)} 
                className="tag-list-item">{tag.name} &times;
              </li>
            ))}
            <form onSubmit={this.handleTagSubmit}>
              <input 
                id="add-tag-button"  
                type="text" 
                onClick={() => this.clearNoteErrors()}
                value={this.state.tag} 
                onChange={this.handleTagChange()} 
                placeholder='+' 
                className="add-tag-button"></input>
            </form>
          </ul>
          <div className="note-form-container">
            <form onSubmit={this.handleSubmit}>
              <div className="note-edit-container">
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
        </div>
      );
    }
  }
}

Note.modules = {
  toolbar: [
    [{ 'header': ['1', '2', '3'] }, { 'size': ['small', false, 'large', 'huge'] }],
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
  'header', 'code',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'size'
];

export default Note;