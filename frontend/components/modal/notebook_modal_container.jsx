import { closeModal } from '../../actions/ui_actions';
import { connect } from 'react-redux';
import NotebookModal from './notebook_modal';
import { createNotebook, clearNotebookErrors, updateNotebook } from '../../actions/notebook_actions';

const mapStateToProps = (state, ownProps) => {
  return {errors: Object.values(state.errors.notebook),
  modal: state.ui.modal,
  notebook: state.ui.payload
  };
};

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal)),
  createNotebook: notebook => dispatch(createNotebook(notebook)),
  updateNotebook: notebook => dispatch(updateNotebook(notebook)),
  clearNotebookErrors: () => dispatch(clearNotebookErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookModal);