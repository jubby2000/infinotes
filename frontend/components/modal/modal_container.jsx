import { closePanelModal } from '../../actions/ui_actions';
import { connect } from 'react-redux';
import Modal from './modal';

const mapStateToProps = (state, ownProps) => ({
  modal: state.ui.modal,
  panel: state.ui.panel
});

const mapDispatchToProps = dispatch => ({
  closePanelModal: panel => dispatch(closePanelModal(panel))
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);