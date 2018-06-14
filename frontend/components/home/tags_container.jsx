import { connect } from 'react-redux';
import TagsIndex from './tags_index';
import { getAllTags, deleteTag } from '../../actions/tag_actions';
import { closeModal, openModal } from '../../actions/ui_actions';
import { getTagNotes } from '../../actions/note_actions';

const mapStateToProps = state => {
  return ({
    tags: Object.values(state.entities.tags)
  });
};

const mapDispatchToProps = dispatch => ({
  getAllTags: () => dispatch(getAllTags()),
  openModal: (modal, payload) => dispatch(openModal(modal, payload)),
  deleteTag: id => dispatch(deleteTag(id)),
  getTagNotes: id => dispatch(getTagNotes(id)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(TagsIndex);