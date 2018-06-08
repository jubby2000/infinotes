import * as NotebookAPIUtil from '../util/notebook_api_util';

export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const RECEIVE_ALL_NOTEBOOKS = 'RECEIVE_ALL_NOTEBOOKS';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';

export const receiveNotebook = notebook => ({
  type: RECEIVE_NOTEBOOK,
  notebook
});

export const receiveAllNotebooks = notebooks => ({
  type: RECEIVE_ALL_NOTEBOOKS,
  notebooks
});

export const removeNotebook = notebookId => ({
  type: REMOVE_NOTEBOOK,
  notebookId
});

export const getAllNotebooks = () => dispatch => (
  NotebookAPIUtil.getAllNotebooks()
  .then(res => dispatch(receiveAllNotebooks(res)))
);

export const getNotebook = id => dispatch => (
  NotebookAPIUtil.getNotebook(id)
  .then(res => dispatch(receiveNotebook(res)))
);

export const createNotebook = notebook => dispatch => (
  NotebookAPIUtil.createNotebook(notebook)
    .then(res => dispatch(receiveNotebook(res)))
);

export const updateNotebook = notebook => dispatch => (
  NotebookAPIUtil.updateNotebook(notebook)
    .then(res => dispatch(receiveNotebook(res)))
);

export const deleteNotebook = id => dispatch => (
  NotebookAPIUtil.deleteNotebook(id)
    .then(res => dispatch(removeNotebook(res.id)))
);