import { closeModal } from '../../actions/ui_actions';
import { connect } from 'react-redux';
import NoteModal from './note_modal';
import { getAllNotebooks } from '../../actions/notebook_actions';
import { createNote, clearNoteErrors } from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: Object.values(state.errors.note),
    modal: state.ui.modal,
    notebooks: Object.values(state.entities.notebooks)
  };
};

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal)),
  getAllNotebooks: () => dispatch(getAllNotebooks()),
  createNote: (notebookId, note) => dispatch(createNote(notebookId, note)),
  clearNoteErrors: () => dispatch(clearNoteErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteModal);