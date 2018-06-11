import React from 'react';

class NotebookModal extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = { id: '', title: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.update = this.update.bind(this);
    this.baseState = this.state;
    this.clearNotebookErrors = this.clearNotebookErrors.bind(this);
  }
  
  componentWillUnmount() {
    this.clearNotebookErrors();
  }

  componentWillReceiveProps(nextProps) {
    
    if (this.props.notebook !== nextProps.notebook && nextProps.notebook !== undefined) {
      this.setState({id: nextProps.notebook.id, title: nextProps.notebook.title });
    }
  }

  handleClose(type) {
    let modal = document.getElementById('notebook-modal');
    modal.classList.add('fadeOut');
    modal.classList.remove('fadeIn');
    this.resetForm();
    modal.addEventListener('animationend', () => this.props.closeModal(type));
  }

  resetForm() {
    this.setState(this.baseState);
  }

  toggleDisabled() {
    const submitButton = document.getElementById("submit-notebook");
    if (this.state.title !== "") {
      submitButton.removeAttribute("disabled");
    } else {
      submitButton.setAttribute("disabled");
    }
  }

  update() {
    return e => this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const notebookTitle = document.getElementById('notebook-input');
    notebookTitle.blur();
    this.props.createNotebook({title: this.state.title})
    .then(() => this.resetForm())
    .then(() => this.handleClose());
  }

  handleEditSubmit(e) {
    e.preventDefault();
    const notebookTitle = document.getElementById('notebook-input');
    notebookTitle.blur();
    this.props.updateNotebook(this.state)
      .then(() => this.resetForm())
      .then(() => this.handleClose());
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

  clearNotebookErrors() {
    if (this.props.errors.length > 0) {
      this.props.clearNotebookErrors();
    }
  }

  render() {
    if (!this.props.modal) {
      return null;
    }
    let disabled = this.state.title === "" ? true : false;
    let component;
    switch (this.props.modal) {
      case 'add-notebook':
        component = 
          <form onSubmit={this.handleSubmit}>
            <div className="add-notebook-image"></div>
            <p className="create-notebook-title">Create Notebook</p>
            <div className="action-title-separator"></div>
            <input id="notebook-input" className="notebook-input" autoFocus type="text" onFocus={this.clearNotebookErrors} onChange={this.update()} placeholder="Title your notebook"/>
            <div className="notebook-errors-container">
              {this.renderErrors()}
            </div>
            <div className="notebook-input-buttons">
              <input className="notebook-input-cancel" readOnly value="Cancel" type="cancel" onClick={() => this.handleClose("add-notebook")}/>
              <input
                className="notebook-input-submit" 
                id="submit-notebook" 
                disabled={disabled} 
                type="submit" 
                value="Create notebook" />
            </div>
          </form>;
        break;
      case 'edit-notebook':
       component =
         <form onSubmit={this.handleEditSubmit}>
           <div className="edit-notebook-image"></div>
           <p className="create-notebook-title">Edit Notebook</p>
           <div className="action-title-separator"></div>
           <input id="notebook-input" value={this.state.title} className="notebook-input" autoFocus type="text" onFocus={this.clearNotebookErrors} onChange={this.update()} placeholder="Title your notebook" />
           <div className="notebook-errors-container">
             {this.renderErrors()}
           </div>
           <div className="notebook-input-buttons">
             <input className="notebook-input-cancel" readOnly value="Cancel" type="cancel" onClick={() => this.handleClose("edit-notebook")} />
             <input
               className="notebook-input-submit"
               id="submit-notebook"
               disabled={disabled}
               type="submit"
               value="Update notebook" />
           </div>
         </form>;
       break;  
      // case 'tag':
      //   component = <TagsContainer />;
      //   break;
      default:
        return null;
    }
    return (
      <div id="notebook-modal" className="notebook-modal animated fadeIn" onClick={e => e.stopPropagation()}> 
          {component}
      </div>
    );
  }
}
export default NotebookModal;