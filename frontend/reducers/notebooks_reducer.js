import merge from 'lodash/merge';

import {
  RECEIVE_ALL_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK
} from '../actions/notebook_actions';

const notebooksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_NOTEBOOKS:
      return action.notebooks;
    case RECEIVE_NOTEBOOK:
      return merge({}, oldState, { [action.notebook.id]: action.notebook });
    case REMOVE_NOTEBOOK:
      const newState = merge({}, oldState);
      delete newState[action.notebookId];
      return newState;
    default:
      return oldState;
  }
};

export default notebooksReducer;