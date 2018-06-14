import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {activePanel: ""};
  }

  handleLogout() {
    this.props.logout();
    this.props.history.push("/login");
  }

  closeAllPanels() {
    this.handleClose("notebook");
    this.handleClose('tag');
  }

  handleClose(type) {
    let panel = document.getElementById('modal-child');
    if (panel) {
      panel.classList.add('slideOutLeft');
      panel.classList.remove('slideInLeft');
      panel.addEventListener('animationend', () => this.props.closePanelModal(type));
    }
    
  }

  swapPanels(activate) {
    if (activate === this.state.activePanel) {
      this.handleClose(activate);
      this.setState({ activePanel: "" });
    } else if (activate === "tag") {
      // this.handleClose("notebook");
      this.props.openPanelModal(activate);
      this.setState({ activePanel: activate });
    } else if (activate === "notebook") {
      // this.handleClose("tag");
      this.props.openPanelModal(activate);
      this.setState({ activePanel: activate });
    }
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="sidebar-container">
          <div className="logo"></div>
          <button className="button new-note" onClick={() => this.props.openModal("new-note")}></button>
          <button className="button notes" onClick={() => this.closeAllPanels()}></button>
          <button className="button notebooks" onClick={() => this.swapPanels("notebook")}></button>
          <button className="button tags" onClick={() => this.swapPanels("tag")}></button>
          <button className="button logout" onClick={() => this.handleLogout()}></button>


        </div>
      );
    }
  }
}

export default Sidebar;