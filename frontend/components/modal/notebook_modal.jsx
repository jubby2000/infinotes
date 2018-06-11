import React from 'react';

class NotebookModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {title: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.baseState = this.state;
  }

  handleClose() {
    let modal = document.getElementById('notebook-modal');
    modal.classList.add('fadeOut');
    modal.classList.remove('fadeIn');
    this.resetForm();
    modal.addEventListener('animationend', () => this.props.closeModal("add-notebook"));
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
    this.props.createNotebook(this.state)
    .then(() => this.resetForm())
    .then(() => this.handleClose());
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
            <input className="notebook-input" autoFocus type="text" onChange={this.update()} placeholder="Title your notebook"/>
            <div className="notebook-input-buttons">
              <input className="notebook-input-cancel" readOnly value="Cancel" type="cancel" onClick={() => this.handleClose()}/>
              <input
                className="notebook-input-submit" 
                id="submit-notebook" 
                disabled={disabled} 
                type="submit" 
                value="Create notebook" />
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