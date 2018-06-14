import merge from 'lodash/merge';

import {
  RECEIVE_ALL_TAGGINGS,
  RECEIVE_TAGGING,
  REMOVE_TAGGING
} from '../actions/tagging_actions';

const taggingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_TAGGINGS:
      return action.taggings;
    case RECEIVE_TAGGING:
      return merge({}, oldState, { [action.tagging.id]: action.tagging });
    case REMOVE_TAGGING:
      const newState = merge({}, oldState);
      delete newState[action.taggingId];
      return newState;
    default:
      return oldState;
  }
};

export default taggingsReducer;