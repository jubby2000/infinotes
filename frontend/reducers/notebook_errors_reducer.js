import { RECEIVE_NOTEBOOK_ERRORS, CLEAR_NOTEBOOK_ERRORS, RECEIVE_NOTEBOOK } from '../actions/notebook_actions';

const notebookErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_NOTEBOOK_ERRORS:
      return action.errors;
    case RECEIVE_NOTEBOOK:
    case CLEAR_NOTEBOOK_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default notebookErrorsReducer;