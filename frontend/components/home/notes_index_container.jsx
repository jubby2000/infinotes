import { connect } from 'react-redux';
import NotesIndex from './notes_index';
import { getAllNotes, deleteNote } from '../../actions/note_actions';

const mapStateToProps = state => ({
  notes: Object.values(state.entities.notes).sort((note1, note2) => Date.parse(note1.updated_at) < Date.parse(note2.updated_at))
});

const mapDispatchToProps = dispatch => ({
  getAllNotes: () => dispatch(getAllNotes()),
  deleteNote: (notebookId, id) => dispatch(deleteNote(notebookId, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);