import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: Object.values(state.errors.session),
  formType: 'Sign in'
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);