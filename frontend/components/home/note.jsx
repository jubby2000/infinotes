import React from 'react';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {note: props.note, changes: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.defaultState = this.state;
  }

  handleSubmit() {
    debugger;
    this.props.updateNote(this.state.note.notebook_id, this.state.note);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.note !== nextProps.note) {
      // debugger;
      this.setState({ note: nextProps.note, changes: false });
    }
  }

  update(field) {
    // debugger;
    return e => this.setState({ 
      note: Object.assign({}, 
        this.state.note, 
        { [field]: e.target.value }), 
      changes: true});
  }

  render() {
    let disabled = this.state.changes === false ? true : false;
    return (
      <div className="note-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="note-edit-container">
            <div className="note-edit-header">
              <input 
                className="note-edit-form-title"
                value={this.state.note.title} 
                onChange={this.update("title")} 
                type="text"/>
              <input
                className="note-edit-submit"
                disabled={disabled}
                value={disabled ? "No changes" : "Save"}
                type="submit"/>
            </div>
            <textarea
              className="note-edit-form-body" 
              value={this.state.note.body}
              onChange={this.update("body")}/>
          </div>    
        </form>

      </div>
    );
  }
}

export default Note;