import React from 'react';

class NotebookModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {title: ''};
  }

  handleClose() {
    let modal = document.getElementById('modal-child');
    modal.classList.add('fadeOut');
    modal.classList.remove('fadeIn');
    modal.addEventListener('animationend', () => this.props.closeModal("add-notebook"));
  }

  update(e) {
    e.preventDefault();
    this.setState({title: e.target.value});
  }

  render() {
    if (!this.props.modal) {
      return null;
    }
    let component;
    switch (this.props.modal) {
      case 'add-notebook':
        component = 
          <form onSubmit={this.handleSubmit}>
            <input selected type="text" onChange={this.update} placeholder="Title your notebook" />
            <button onClick={() => this.handleClose()}>Cancel</button>
            <input type="submit" value="Create notebook" />
          </form>;
        break;
      // case 'tag':
      //   component = <TagsContainer />;
      //   break;
      default:
        return null;
    }
    return (
      <div className="notebook-modal-background">
        <div id="notebook-modal-child" className="modal-child animated fadeIn" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  }
}
export default NotebookModal;