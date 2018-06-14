import * as TagAPIUtil from '../util/tag_api_util';

export const RECEIVE_TAG = 'RECEIVE_TAG';
export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS';
export const REMOVE_TAG = 'REMOVE_TAG';
export const RECEIVE_TAG_ERRORS = 'RECEIVE_TAG_ERRORS';
export const CLEAR_TAG_ERRORS = 'CLEAR_TAG_ERRORS';

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

export const receiveAllTags = tags => ({
  type: RECEIVE_ALL_TAGS,
  tags
});

export const removeTag = tagId => ({
  type: REMOVE_TAG,
  tagId
});

export const receiveTagErrors = (errors) => ({
  type: RECEIVE_TAG_ERRORS,
  errors
});

export const clearTagErrors = () => ({
  type: CLEAR_TAG_ERRORS
});

export const getAllTags = () => dispatch => (
  TagAPIUtil.getAllTags()
    .then(res => dispatch(receiveAllTags(res)))
);

export const getTag = id => dispatch => (
  TagAPIUtil.getTag(id)
    .then(res => dispatch(receiveTag(res)))
);

export const createTag = tag => dispatch => (
  TagAPIUtil.createTag(tag)
    .then(res => dispatch(receiveTag(res)),
      err => (
        dispatch(receiveTagErrors(err.responseJSON))
      ))
);

export const updateTag = tag => dispatch => (
  TagAPIUtil.updateTag(tag)
    .then(res => dispatch(receiveTag(res)),
      err => (
        dispatch(receiveTagErrors(err.responseJSON))
      ))
);

export const deleteTag = id => dispatch => (
  TagAPIUtil.deleteTag(id)
    .then(res => dispatch(removeTag(res.id)))
);