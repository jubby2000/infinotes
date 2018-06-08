export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
// export const TOGGLE_FULLSCREEN = 'ENTER_FULLSCREEN';
// export const EXIT_FULLSCREEN = 'EXIT_FULLSCREEN';

export const openModal = modal => ({
  type: OPEN_MODAL,
  modal
});

export const closeModal = panel => ({
  type: CLOSE_MODAL,
  panel
});

// export const toggleFullscreen = fullscreenStatus => ({
//   type: TOGGLE_FULLSCREEN,
//   fullscreenStatus
// });