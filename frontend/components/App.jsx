import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Switch, Redirect } from 'react-router-dom';

const App = () => (
  <div>
    {/* <Switch> */}
      <ProtectedRoute exact path="/" component={GreetingContainer} />
      {/* <Redirect to="/" /> */}
    {/* </Switch>   */}
    <section className='form-section'>
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Redirect to="/" />
      </Switch>  
    </section>
  </div>
);

export default App;