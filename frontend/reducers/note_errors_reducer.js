import { RECEIVE_NOTE_ERRORS, CLEAR_NOTE_ERRORS, RECEIVE_NOTE } from "../actions/note_actions";


const noteErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_NOTE_ERRORS:
      return action.errors;
    case CLEAR_NOTE_ERRORS:
    case RECEIVE_NOTE:
      return [];  
    default:
      return oldState;
  }
};

export default noteErrorsReducer;