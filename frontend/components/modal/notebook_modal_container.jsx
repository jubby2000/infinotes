import { closeModal } from '../../actions/ui_actions';
import { connect } from 'react-redux';
import NotebookModal from './notebook_modal';
import { createNotebook } from '../../actions/notebook_actions';

const mapStateToProps = (state, ownProps) => ({
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal)),
  createNotebook: notebook => dispatch(createNotebook(notebook))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookModal);