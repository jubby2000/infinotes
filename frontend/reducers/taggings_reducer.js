import merge from 'lodash/merge';

import {
  RECEIVE_ALL_TAGGINGS,
  RECEIVE_TAGGING,
  REMOVE_TAGGING
} from '../actions/tagging_actions';
import { REMOVE_TAG } from '../actions/tag_actions';

const taggingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_TAGGINGS:
      return action.taggings;
    case RECEIVE_TAGGING:
      return merge({}, oldState, { [action.tagging.id]: action.tagging });
    case REMOVE_TAGGING:
      let newState = merge({}, oldState);
      delete newState[action.taggingId];
      return newState;
    case REMOVE_TAG:
      const state = merge({}, oldState);
      Object.values(state).forEach(tagging => {
        if (tagging.tag_id === action.tagId) {
          delete state[tagging.id];
        }
      });
      return state;
    default:
      return oldState;
  }
};

export default taggingsReducer;