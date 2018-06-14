import merge from 'lodash/merge';

import {
  RECEIVE_ALL_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG
} from '../actions/tag_actions';

const tagsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_TAGS:
      return action.tags;
    case RECEIVE_TAG:
      return merge({}, oldState, { [action.tag.id]: action.tag });
    case REMOVE_TAG:
      const newState = merge({}, oldState);
      delete newState[action.tagId];
      return newState;
    default:
      return oldState;
  }
};

export default tagsReducer;