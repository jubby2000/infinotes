import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
  }

  handleLogout() {
    this.props.logout();
    this.props.history.push("/login");
  }

  closeAllPanels() {
    this.props.closePanelModal("notebook");
    // this.props.closePanelModal("tag");
  }

  swapPanels(active) {
    if (active === "notebook") {
      // this.props.closePanelModal("tag");
    } else if (active === "tag") {
      this.props.closePanelModal("notebook");
    }
    this.props.openPanelModal({ modal: active });
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