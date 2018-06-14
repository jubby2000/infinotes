import * as NoteAPIUtil from '../util/note_api_util';

export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const RECEIVE_NOTE_ERRORS = 'RECEIVE_NOTE_ERRORS';
export const CLEAR_NOTE_ERRORS = 'CLEAR_NOTE_ERRORS';
export const RECEIVE_TAG_NOTES = 'RECEIVE_TAG_NOTES';
export const RECEIVE_NOTEBOOK_NOTES = 'RECEIVE_NOTEBOOK_NOTES';

export const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
});

export const receiveAllNotes = notes => ({
  type: RECEIVE_ALL_NOTES,
  notes
});

export const receiveTagNotes = notes => ({
  type: RECEIVE_TAG_NOTES,
  notes
});

export const receiveNotebookNotes = notes => ({
  type: RECEIVE_NOTEBOOK_NOTES,
  notes
});

export const removeNote = noteId => ({
  type: REMOVE_NOTE,
  noteId
});

export const receiveNoteErrors = (errors) => ({
  type: RECEIVE_NOTE_ERRORS,
  errors
});

export const clearNoteErrors = () => ({
  type: CLEAR_NOTE_ERRORS
});

export const getAllNotes = () => dispatch => (
  NoteAPIUtil.getAllNotes()
    .then(res => dispatch(receiveAllNotes(res)))
);

export const getNotebookNotes = notebookId => dispatch => (
  NoteAPIUtil.getNotebookNotes(notebookId)
  .then(res => dispatch(receiveNotebookNotes(res)))
);

export const getTagNotes = tagId => dispatch => (
  NoteAPIUtil.getTagNotes(tagId)
    .then(res => dispatch(receiveTagNotes(res)))
);

export const getNote = (notebookId, id) => dispatch => (
  NoteAPIUtil.getNote(notebookId, id)
    .then(res => dispatch(receiveNote(res)))
);

export const createNote = (notebookId, note) => dispatch => (
  NoteAPIUtil.createNote(notebookId, note)
    .then(res => dispatch(receiveNote(res)),
    err => (
      dispatch(receiveNoteErrors(err.responseJSON))
    ))
);

export const updateNote = (notebookId, note) => dispatch => (
  NoteAPIUtil.updateNote(notebookId, note)
    .then(res => dispatch(receiveNote(res)),
    err => (
      dispatch(receiveNoteErrors(err.responseJSON))
    ))
);

export const deleteNote = (notebookId, id) => dispatch => (
  NoteAPIUtil.deleteNote(notebookId, id)
    .then(res => dispatch(removeNote(res.id)))
);