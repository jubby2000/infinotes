import { connect } from 'react-redux';
import NotesIndex from './notes_index';
import { getAllNotes, deleteNote } from '../../actions/note_actions';
import { removeFilter } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({
  notes: Object.values(state.entities.notes).sort((note1, note2) => Date.parse(note1.updated_at) < Date.parse(note2.updated_at)),
  filter: state.ui.filter,
  payload: state.ui.payload
});

const mapDispatchToProps = dispatch => ({
  getAllNotes: () => dispatch(getAllNotes()),
  deleteNote: (notebookId, id) => dispatch(deleteNote(notebookId, id)),
  removeFilter: filter => dispatch(removeFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);