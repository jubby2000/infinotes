import { closeModal } from '../../actions/ui_actions';
import { connect } from 'react-redux';
import Modal from './modal';

const mapStateToProps = (state, ownProps) => ({
  modal: state.ui.modal,
  panel: ownProps.panel
});

const mapDispatchToProps = dispatch => ({
  closeModal: panel => dispatch(closeModal(panel))
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);