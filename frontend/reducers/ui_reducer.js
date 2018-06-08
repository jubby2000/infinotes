import merge from 'lodash/merge';
import {
  OPEN_MODAL,
  // TOGGLE_FULLSCREEN,
  CLOSE_MODAL
} from '../actions/ui_actions';


const uiReducer = (oldState = { modal: null }, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return { modal: null };  
    // case TOGGLE_FULLSCREEN:
    //   return merge({}, oldState, { full_screen: !action.fullscreenStatus });
    default:
      return oldState;
  }
};

export default uiReducer;