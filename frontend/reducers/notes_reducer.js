import merge from 'lodash/merge';

import {
  RECEIVE_ALL_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE
} from '../actions/note_actions';

const notesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_NOTES:
      return action.notes;
    case RECEIVE_NOTE:
      return merge({}, oldState, { [action.note.id]: action.note });
    case REMOVE_NOTE:
      const newState = merge({}, oldState);
      delete newState[action.noteId];
      return newState;
    default:
      return oldState;
  }
};

export default notesReducer;