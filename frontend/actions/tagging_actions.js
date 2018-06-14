import * as TaggingAPIUtil from '../util/tagging_api_util';

export const RECEIVE_TAGGING = 'RECEIVE_TAGGING';
export const RECEIVE_ALL_TAGGINGS = 'RECEIVE_ALL_TAGGINGS';
export const REMOVE_TAGGING = 'REMOVE_TAGGING';
export const RECEIVE_TAGGING_ERRORS = 'RECEIVE_TAGGING_ERRORS';
export const CLEAR_TAGGING_ERRORS = 'CLEAR_TAGGING_ERRORS';

export const receiveTagging = tagging => ({
  type: RECEIVE_TAGGING,
  tagging
});

export const receiveAllTaggings = taggings => ({
  type: RECEIVE_ALL_TAGGINGS,
  taggings
});

export const removeTagging = taggingId => ({
  type: REMOVE_TAGGING,
  taggingId
});

export const receiveTaggingErrors = (errors) => ({
  type: RECEIVE_TAGGING_ERRORS,
  errors
});

export const clearTaggingErrors = () => ({
  type: CLEAR_TAGGING_ERRORS
});

export const getAllTaggings = () => dispatch => (
  TaggingAPIUtil.getAllTaggings()
    .then(res => dispatch(receiveAllTaggings(res)))
);

export const getTagging = id => dispatch => (
  TaggingAPIUtil.getTagging(id)
    .then(res => dispatch(receiveTagging(res)))
);

export const createTagging = tagging => dispatch => (
  TaggingAPIUtil.createTagging(tagging)
    .then(res => dispatch(receiveTagging(res)),
      err => (
        dispatch(receiveTaggingErrors(err.responseJSON))
      ))
);

export const deleteTagging = id => dispatch => (
  TaggingAPIUtil.deleteTagging(id)
    .then(res => dispatch(removeTagging(res.id)))
);