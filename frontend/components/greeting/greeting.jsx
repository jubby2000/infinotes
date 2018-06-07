import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  handleLogout() {
    this.props.logout();
    this.props.history.push("/login");
  }

  render() {
    if (this.props.currentUser) {
      return (
        <button onClick={() => this.handleLogout()}>Logout</button>
      );
    }
  }
}

export default Greeting;