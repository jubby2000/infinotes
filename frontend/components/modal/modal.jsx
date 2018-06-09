import React from 'react';
import NotebooksContainer from '../home/notebooks_container';
// import TagsContainer from '../home/tags_container';

class Modal extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClose() {
    let modal = document.getElementById('modal-child');
    modal.classList.add('slideOutLeft');
    modal.classList.remove('slideInLeft');
    modal.addEventListener('animationend', () => this.props.closeModal(this.props.panel));
  }

  render() {
    if (!this.props.modal) {
      return null;
    }
    let component;
    switch (this.props.modal) {
      case 'notebook':
        component = <NotebooksContainer panel="notebook"/>;
        break;
      // case 'tag':
      //   component = <TagsContainer />;
      //   break;
      default:
        return null;
    }
    return (
      <div className="modal-background" onClick={() => this.handleClose()}>
        <div id="modal-child" className="modal-child animated slideInLeft" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  }
}
 export default Modal;
