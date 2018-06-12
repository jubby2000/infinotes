import { connect } from 'react-redux';
import Note from './note';
import { getNote, updateNote, clearNoteErrors } from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => ({
  note: ownProps.note,
  errors: Object.values(state.errors.note)
});

const mapDispatchToProps = dispatch => ({
  getNote: (notebookId, noteId) => dispatch(getNote(notebookId, noteId)),
  updateNote: (notebookId, note) => dispatch(updateNote(notebookId, note)),
  clearNoteErrors: () => dispatch(clearNoteErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);