import { RECEIVE_TAGGING_ERRORS, CLEAR_TAGGING_ERRORS, RECEIVE_TAGGING } from '../actions/tagging_actions';

const taggingErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_TAGGING_ERRORS:
      return action.errors;
    case RECEIVE_TAGGING:
    case CLEAR_TAGGING_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default taggingErrorsReducer;