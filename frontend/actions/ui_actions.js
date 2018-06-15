export const OPEN_PANEL_MODAL = 'OPEN_PANEL_MODAL';
export const CLOSE_PANEL_MODAL = 'CLOSE_PANEL_MODAL';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
// export const EDIT_MODAL = 'EDIT_MODAL';
// export const TOGGLE_FULLSCREEN = 'ENTER_FULLSCREEN';
// export const EXIT_FULLSCREEN = 'EXIT_FULLSCREEN';

export const openPanelModal = panel => ({
  type: OPEN_PANEL_MODAL,
  panel
});

export const closePanelModal = panel => ({
  type: CLOSE_PANEL_MODAL,
  panel
});

export const openModal = (modal, payload) => ({
  type: OPEN_MODAL,
  modal,
  payload
});


export const closeModal = modal => ({
  type: CLOSE_MODAL,
  modal
});

export const addFilter = (filter, payload) => ({
  type: ADD_FILTER,
  filter,
  payload
});

export const removeFilter = (filter) => ({
  type: REMOVE_FILTER,
  filter
});

// export const toggleFullscreen = fullscreenStatus => ({
//   type: TOGGLE_FULLSCREEN,
//   fullscreenStatus
// });