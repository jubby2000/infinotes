import { connect } from 'react-redux';
import NotebooksIndex from './notebooks_index';
import { getAllNotebooks, deleteNotebook } from '../../actions/notebook_actions';
import { closeModal, openModal } from '../../actions/ui_actions';
import { getAllNotes } from '../../actions/note_actions';

const mapStateToProps = state => {
  return ({
    notebooks: Object.values(state.entities.notebooks),
    notes: Object.values(state.entities.notes)
  });
};

const mapDispatchToProps = dispatch => ({
  getAllNotebooks: () => dispatch(getAllNotebooks()),
  openModal: (modal, payload) => dispatch(openModal(modal, payload)),
  deleteNotebook: id => dispatch(deleteNotebook(id)),
  getAllNotes: () => dispatch(getAllNotes())
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebooksIndex);