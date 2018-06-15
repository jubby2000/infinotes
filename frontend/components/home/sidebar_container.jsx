import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { logout } from '../../actions/session_actions';
import { openPanelModal, closePanelModal, openModal } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';
import { getAllNotes } from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openPanelModal: panel => dispatch(openPanelModal(panel)),
  closePanelModal: panel => dispatch(closePanelModal(panel)),
  openModal: modal => dispatch(openModal(modal)),
  getAllNotes: () => dispatch(getAllNotes())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));