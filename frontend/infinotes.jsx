import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { 
  getAllNotebooks, 
  getNotebook, 
  createNotebook,
  updateNotebook,
  deleteNotebook 
} from './actions/notebook_actions';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.login = login;
  // window.logout = logout;
  // window.signup = signup;
  window.getAllNotebooks = getAllNotebooks;
  // window.getNotebook = getNotebook;
  // window.createNotebook = createNotebook;
  // window.updateNotebook = updateNotebook;
  // window.deleteNotebook = deleteNotebook;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});