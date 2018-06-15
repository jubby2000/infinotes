import merge from 'lodash/merge';
import {
  OPEN_MODAL,
  // TOGGLE_FULLSCREEN,
  CLOSE_MODAL,
  OPEN_PANEL_MODAL,
  CLOSE_PANEL_MODAL,
  ADD_FILTER,
  REMOVE_FILTER
} from '../actions/ui_actions';


const uiReducer = (oldState = { modal: null, panel: null, filter: null }, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case OPEN_MODAL:
      return merge({}, oldState, { modal: action.modal, payload: action.payload });
    case CLOSE_MODAL:
      return merge({}, oldState, { modal: null });
    case OPEN_PANEL_MODAL:
      return { panel: action.panel };
    case CLOSE_PANEL_MODAL:
      return merge({}, oldState, { panel: null });
    case REMOVE_FILTER:
      return { modal: null, panel: null, filter: null };
    case ADD_FILTER:
      return merge({}, oldState, { filter: action.filter, payload: action.payload });
    // case TOGGLE_FULLSCREEN:
    //   return merge({}, oldState, { full_screen: !action.fullscreenStatus });
    default:
      return oldState;
  }
};

export default uiReducer;