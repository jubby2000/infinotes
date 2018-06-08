import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      demouser: {}
    };
    if (props.location.state !== undefined && !isEmpty(props.location.state)) {
      this.state.demouser = props.location.state;
      // this.loginDemoUser(this.state.demouser);
    }
    this.loginDemoUser = this.loginDemoUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }
  
  componentWillUnmount() {
    this.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.state !== undefined && !isEmpty(nextProps.location.state)) {
      this.state.demouser = nextProps.location.state;
      this.loginDemoUser(this.state.demouser);
    }
  }

  componentDidMount(){
    if (this.state.demouser !== undefined && !isEmpty(this.state.demouser)) {
      this.loginDemoUser(this.state.demouser);
    }
  }
  
  loginDemoUser({ username, password }) {
    const usernameField = document.getElementById('username');
    const submitButton = document.getElementById('submit-button');
    let userArr = username.split('');
    let passArr = password.split('');
    userArr.forEach((letter, i) => {
      setTimeout(() => {
        this.setState({username: this.state.username + letter});
        }, 100*i);
    });

    passArr.forEach((letter, i) => {
      setTimeout(() => {
        this.setState({ password: this.state.password + letter });
      }, 100*i + (100*userArr.length));
    });

    setTimeout(() => {
      submitButton.click();
    }, (100 * passArr.length) + (100 * userArr.length));

  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value});
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((err, idx) => (
          <li key={`err-${idx}`}>{err}</li>
        ))}
      </ul>
    );
  }

  clearErrors() {
    if (this.props.errors.length > 0) {
      this.props.clearErrors();
    }
  }

  render() {
    const buttonText = this.props.formType === 'Sign up' ? 'Sign up for free' : 'Sign in';
    const formTitle = this.props.formType === 'Sign up' ? 'Sign Up for Free' : 'Sign In';
    let link;
    if (this.props.location.pathname === '/signup') {
      link = <Link to='/login'>Log in</Link>; 
    } else if (this.props.location.pathname === '/login'){
      link = <Link to='/signup'>Sign up</Link>;
    }

    return (
      <div>
        <header className='header'>
          <div>
            <div className='header-logo'>
            </div>
            <h2>Infinotes</h2>
          </div>
          <div className='session-links'>
            {link}
            <Link
              className='demo-login'
              replace
              to={{pathname: '/login', state: { username: 'hgranger', password: 'leviosa' }}}
            >Take a look around</Link>
          </div>
        </header>
        <div className="session-container">
          <div className="intro-container">
            <h1>Meet Infinotes, your robot brain.</h1>
            <p>Capture and organize notes from anywhere. Your best ideas are always with you, at least until a server crash.</p>
          </div>
          <div className="session-divider"></div>
          <div className="form-container">
            <form 
              onSubmit={this.handleSubmit}
              value={this.props.formType}>
              <h3>{formTitle}</h3>
              <input
                id="username"
                placeholder="Username" 
                type="text" 
                value={this.state.username} 
                onFocus={this.clearErrors}
                onChange={this.handleChange('username')}/>
              <input
                id="password" 
                placeholder="Password"
                value={this.state.password}
                onFocus={this.clearErrors}
                onChange={this.handleChange('password')}
                type="password"/>
              <p>By clicking {this.props.formType}, I agree to take awesome notes.</p>
              <button id="submit-button" type="submit">{buttonText}</button>
              {this.renderErrors()}
            </form>
          </div>
        </div>
      </div>  
    );
  }
}

export default withRouter(SessionForm);