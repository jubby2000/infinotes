import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Redirect to="/" />
    ) : (
      <Component {...props} />
    )
  )}/>
);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));