import * as NoteAPIUtil from '../util/note_api_util';

export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const REMOVE_NOTE = 'REMOVE_NOTE';

export const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
});

export const receiveAllNotes = notes => ({
  type: RECEIVE_ALL_NOTES,
  notes
});

export const removeNote = noteId => ({
  type: REMOVE_NOTE,
  noteId
});

export const getAllNotes = () => dispatch => (
  NoteAPIUtil.getAllNotes()
    .then(res => dispatch(receiveAllNotes(res)))
);

export const getNotebookNotes = notebookId => dispatch => (
  NoteAPIUtil.getNotebookNotes(notebookId)
  .then(res => dispatch(receiveAllNotes(res)))
);

export const getNote = (notebookId, id) => dispatch => (
  NoteAPIUtil.getNote(notebookId, id)
    .then(res => dispatch(receiveNote(res)))
);

export const createNote = (notebookId, note) => dispatch => (
  NoteAPIUtil.createNote(notebookId, note)
    .then(res => dispatch(receiveNote(res)))
);

export const updateNote = (notebookId, note) => dispatch => (
  NoteAPIUtil.updateNote(notebookId, note)
    .then(res => dispatch(receiveNote(res)))
);

export const deleteNote = (notebookId, id) => dispatch => (
  NoteAPIUtil.deleteNote(notebookId, id)
    .then(res => dispatch(removeNote(res.id)))
);