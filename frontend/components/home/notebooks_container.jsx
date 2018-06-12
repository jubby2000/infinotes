import { connect } from 'react-redux';
import NotebooksIndex from './notebooks_index';
import { getAllNotebooks, deleteNotebook } from '../../actions/notebook_actions';
import { closeModal, openModal } from '../../actions/ui_actions';

const mapStateToProps = state => {
  return ({
    notebooks: Object.values(state.entities.notebooks)
  });
};

const mapDispatchToProps = dispatch => ({
  getAllNotebooks: () => dispatch(getAllNotebooks()),
  openModal: (modal, payload) => dispatch(openModal(modal, payload)),
  deleteNotebook: id => dispatch(deleteNotebook(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebooksIndex);