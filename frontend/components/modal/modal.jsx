import React from 'react';
import NotebooksContainer from '../home/notebooks_container';
// import TagsContainer from '../home/tags_container';

class Modal extends React.Component {

  render() {
    if (!this.props.modal) {
      return null;
    }
    let component;
    switch (this.props.modal) {
      case 'notebook':
        console.log("GREAT SUCCESS");
        component = <NotebooksContainer />;
        break;
      // case 'tag':
      //   component = <TagsContainer />;
      //   break;
      default:
        return null;
    }
    return (
      <div className="modal-background" onClick={() => this.props.closeModal(this.props.panel)}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  }
}
 export default Modal;
