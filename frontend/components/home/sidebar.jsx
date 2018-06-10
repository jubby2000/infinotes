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
    // this.props.closePanelModal("tag");
  }

  handleClose(notebook) {
    let panel = document.getElementById('modal-child');
    if (panel) {
      panel.classList.add('slideOutLeft');
      panel.classList.remove('slideInLeft');
      panel.addEventListener('animationend', () => this.props.closePanelModal(notebook));
    }
    
  }

  swapPanels(activate) {
    if (activate === "notebook" && this.state.activePanel === "notebook") {
      // this.props.closePanelModal("tag");
      this.handleClose("notebook");
      this.state.activePanel = "";
    } else if (activate === "tag") {
      this.handleClose("notebook");
    } else if (activate === "notebook" && this.state.activePanel === "") {
      this.props.openPanelModal(activate);
      this.state.activePanel = activate;
    }
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="sidebar-container">
          <div className="logo"></div>
          <button className="button new-note" onClick={() => this.closeAllPanels()}></button>
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