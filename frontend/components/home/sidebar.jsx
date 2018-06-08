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
    this.props.closeModal("notebook");
    // this.props.closeModal("tag");
  }

  swapPanels(active) {
    if (active === "notebook") {
      // this.props.closeModal("tag");
    } else {
      this.props.closeModal("notebook");
    }
    this.props.openModal({ modal: active });
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="sidebar-container">
          <div className="logo"></div>
          <button className="button new-note" onClick={() => this.closeAllPanels()}></button>
          <button className="button notes" onClick={() => this.closeAllPanels()}></button>
          <button className="button notebooks" onClick={() => this.swapPanels("notebook" )}></button>
          <button className="button tags" onClick={() => this.swapPanels("tag")}></button>
          <button className="button logout" onClick={() => this.handleLogout()}></button>


        </div>
      );
    }
  }
}

export default Sidebar;