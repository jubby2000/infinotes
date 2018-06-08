import { connect } from 'react-redux';
import NotebooksIndex from './notebooks_index';
import { getAllNotebooks } from '../../actions/notebook_actions';
import { closeModal } from '../../actions/ui_actions';

const mapStateToProps = state => ({
  notebooks: Object.values(state.entities.notebooks)
});

const mapDispatchToProps = dispatch => ({
  getAllNotebooks: () => dispatch(getAllNotebooks()),
  closeModal: () => dispatch(closeModal("notebook"))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebooksIndex);