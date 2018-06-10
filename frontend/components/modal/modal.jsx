import React from 'react';
import NotebooksContainer from '../home/notebooks_container';
// import TagsContainer from '../home/tags_container';

class Modal extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClose() {
    let panel = document.getElementById('modal-child');
    panel.classList.add('slideOutLeft');
    panel.classList.remove('slideInLeft');
    panel.addEventListener('animationend', () => this.props.closePanelModal(this.props.panel));
  }

  render() {
    if (!this.props.panel) {
      return null;
    }
    let component;
    switch (this.props.panel) {
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
