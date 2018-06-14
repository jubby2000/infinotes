export const getAllNotes = () => (
  $.ajax({
    method: 'GET',
    url: 'api/notes'
  })
);

export const getNotebookNotes = notebookId => (
  $.ajax({
    method: 'GET',
    url: `api/notebooks/${notebookId}/notes`
  })
);

export const getTagNotes = tagId => (
  $.ajax({
    method: 'GET',
    url: `api/tags/${tagId}/notes`
  })
);

export const getNote = (notebookId, id) => (
  $.ajax({
    method: 'GET',
    url: `api/notebooks/${notebookId}/notes/${id}`
  })
);

export const createNote = (notebookId, note) => (
  $.ajax({
    method: 'POST',
    url: `api/notebooks/${notebookId}/notes`,
    data: { note }
  })
);

export const updateNote = (notebookId, note) => (
  $.ajax({
    method: 'PATCH',
    url: `api/notebooks/${notebookId}/notes/${note.id}`,
    data: { note }
  })
);

export const deleteNote = (notebookId, id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/notebooks/${notebookId}/notes/${id}`
  })
);