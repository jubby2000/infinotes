import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: Object.values(state.errors.session),
  formType: 'Sign up'
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);