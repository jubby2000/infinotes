import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = () => ({
  render() {
    return (
      this.props.currentUser ? (
        <div>
          <h2>Welcome, {this.props.currentUser.username}</h2>
          <button onClick={() => this.props.logout()}>Logout</button>
        </div>  
    ) : (
      <div>
        <Link to={`/signup`}>Signup</Link>
        <Link to={`/login`}>Login</Link>
      </div>
    )
  );
  }
});

export default Greeting;