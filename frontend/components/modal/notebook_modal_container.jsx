import { closeModal } from '../../actions/ui_actions';
import { connect } from 'react-redux';
import NotebookModal from './notebook_modal';

const mapStateToProps = (state, ownProps) => ({
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookModal);