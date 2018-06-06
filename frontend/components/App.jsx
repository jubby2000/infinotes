import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <header className='header'>
      <div>
        <div className='header-logo'>
        </div>
        <h1>Infinotes</h1>
      </div>
      <GreetingContainer />
    </header>
    <section className='form-section'>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </section>
  </div>
);

export default App;