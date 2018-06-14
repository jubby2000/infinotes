import { RECEIVE_TAG_ERRORS, CLEAR_TAG_ERRORS, RECEIVE_TAG } from '../actions/tag_actions';

const tagErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_TAG_ERRORS:
      return action.errors;
    case RECEIVE_TAG:
    case CLEAR_TAG_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default tagErrorsReducer;