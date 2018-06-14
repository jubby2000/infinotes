import { connect } from 'react-redux';
import Note from './note';
import { getNote, updateNote, clearNoteErrors } from '../../actions/note_actions';
import { getNoteTags } from '../../reducers/tags_selector';
import { getAllTaggings } from '../../actions/tagging_actions';
import { getAllTags } from '../../actions/tag_actions';
import { openModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({
  note: ownProps.note,
  tags: getNoteTags(state.entities.tags, state.entities.taggings, ownProps.note.id),
  errors: Object.values(state.errors.note)
});

const mapDispatchToProps = dispatch => ({
  getNote: (notebookId, noteId) => dispatch(getNote(notebookId, noteId)),
  updateNote: (notebookId, note) => dispatch(updateNote(notebookId, note)),
  clearNoteErrors: () => dispatch(clearNoteErrors()),
  getAllTags: () => dispatch(getAllTags()),
  getAllTaggings: () => dispatch(getAllTaggings()),
  openModal: type => dispatch(openModal(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);