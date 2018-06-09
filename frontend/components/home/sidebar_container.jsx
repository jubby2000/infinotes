import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { logout } from '../../actions/session_actions';
import { openPanelModal, closePanelModal } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openPanelModal: panel => dispatch(openPanelModal(panel)),
  closePanelModal: panel => dispatch(closePanelModal(panel))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));