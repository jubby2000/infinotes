import { connect } from 'react-redux';
import Note from './note';
import { getNote, updateNote } from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => ({
  note: ownProps.note
});

const mapDispatchToProps = dispatch => ({
  getNote: (notebookId, noteId) => dispatch(getNote(notebookId, noteId)),
  updateNote: (notebookId, note) => dispatch(updateNote(notebookId, note))
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);