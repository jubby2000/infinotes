import { closeModal } from '../../actions/ui_actions';
import { connect } from 'react-redux';
import NotebookModal from './notebook_modal';
import { createNotebook, clearNotebookErrors } from '../../actions/notebook_actions';

const mapStateToProps = (state, ownProps) => ({
  modal: state.ui.modal,
  errors: Object.values(state.errors.notebook)
});

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal)),
  createNotebook: notebook => dispatch(createNotebook(notebook)),
  clearNotebookErrors: () => dispatch(clearNotebookErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookModal);