import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render() {
    let link;
    if (this.props.location.pathname === '/signup') {
      link = <Link to='/login'>Log in</Link>; 
    } else if (this.props.location.pathname === '/login'){
      link = <Link to='/signup'>Sign up</Link>;
    }
    
    return (
      this.props.currentUser ? (
        <div>
          <h2>Welcome, {this.props.currentUser.username}</h2>
          <button onClick={() => this.props.logout()}>Logout</button>
        </div>  
    ) : (
      <div className='session-links'>
        {link}
        <Link
          className='demo-login'
          to='/login'
          demouser={{ username: 'hgranger', password: 'leviosa' }}
        >Take a look around</Link>
      </div>
    )
  );
  }
}

export default Greeting;