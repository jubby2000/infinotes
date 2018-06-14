import { closeModal } from '../../actions/ui_actions';
import { connect } from 'react-redux';
import TagModal from './tag_modal';
import { createTag, clearTagErrors, updateTag } from '../../actions/tag_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: Object.values(state.errors.tag),
    modal: state.ui.modal,
    tag: state.ui.payload
  };
};

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal)),
  createTag: tag => dispatch(createTag(tag)),
  updateTag: tag => dispatch(updateTag(tag)),
  clearTagErrors: () => dispatch(clearTagErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(TagModal);