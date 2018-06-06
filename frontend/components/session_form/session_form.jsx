import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }
  
  componentWillUnmount() {
    this.clearErrors();
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
    return (
      <div className="session-container">
        <form 
          onSubmit={this.handleSubmit}
          value={this.props.formType}>
          <h2>{formTitle}</h2>
          <input
            placeholder="Username" 
            type="text" 
            value={this.state.username} 
            onFocus={this.clearErrors}
            onChange={this.handleChange('username')}/>
          <input 
            placeholder="Password"
            value={this.state.password}
            onFocus={this.clearErrors}
            onChange={this.handleChange('password')}
            type="password"/>
          <p>By clicking {this.props.formType}, I agree to take awesome notes.</p>
          <button type="submit">{buttonText}</button>
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);