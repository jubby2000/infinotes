import React from 'react';

class TagModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = { id: '', name: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.update = this.update.bind(this);
    this.baseState = this.state;
    this.clearTagErrors = this.clearTagErrors.bind(this);
  }

  componentWillUnmount() {
    this.clearTagErrors();
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.tag !== nextProps.tag && nextProps.tag !== undefined) {
      this.setState({ id: nextProps.tag.id, name: nextProps.tag.name });
    }
  }

  handleClose(type) {
    let modal = document.getElementById('tag-modal');
    modal.classList.add('fadeOut');
    modal.classList.remove('fadeIn');
    this.resetForm();
    modal.addEventListener('animationend', () => this.props.closeModal(type));
  }

  resetForm() {
    this.setState(this.baseState);
  }

  toggleDisabled() {
    const submitButton = document.getElementById("submit-tag");
    if (this.state.title !== "") {
      submitButton.removeAttribute("disabled");
    } else {
      submitButton.setAttribute("disabled");
    }
  }

  update() {
    return e => this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const tagTitle = document.getElementById('tag-input');
    tagTitle.blur();
    this.props.createTag({ name: this.state.name })
      .then(() => this.resetForm())
      .then(() => this.handleClose());
  }

  handleEditSubmit(e) {
    e.preventDefault();
    const tagTitle = document.getElementById('tag-input');
    tagTitle.blur();
    this.props.updateTag(this.state)
      .then(() => this.resetForm())
      .then(() => this.handleClose());
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((err, idx) => (
          <li key={`err-${idx}`}>{err}</li>
        ))}
      </ul>
    );
  }

  clearTagErrors() {
    if (this.props.errors.length > 0) {
      this.props.clearTagErrors();
    }
  }

  render() {
    if (!this.props.modal) {
      return null;
    }
    let disabled = this.state.name === "" ? true : false;
    let component;
    switch (this.props.modal) {
      case 'add-tag':
        component =
          <form onSubmit={this.handleSubmit}>
            <div className="add-tag-image"></div>
            <p className="create-tag-title">Create Tag</p>
            <div className="action-title-separator"></div>
            <input id="tag-input" className="tag-input" autoFocus type="text" onFocus={this.clearTagErrors} onChange={this.update()} placeholder="Title your tag" />
            <div className="tag-errors-container">
              {this.renderErrors()}
            </div>
            <div className="tag-input-buttons">
              <input className="tag-input-cancel" readOnly value="Cancel" type="cancel" onClick={() => this.handleClose("add-tag")} />
              <input
                className="tag-input-submit"
                id="submit-tag"
                disabled={disabled}
                type="submit"
                value="Create tag" />
            </div>
          </form>;
        break;
      case 'edit-tag':
        component =
          <form onSubmit={this.handleEditSubmit}>
            <div className="edit-tag-image"></div>
            <p className="create-tag-title">Edit Tag</p>
            <div className="action-title-separator"></div>
            <input id="tag-input" value={this.state.name} className="tag-input" autoFocus type="text" onFocus={this.clearTagErrors} onChange={this.update()} placeholder="Title your tag" />
            <div className="tag-errors-container">
              {this.renderErrors()}
            </div>
            <div className="tag-input-buttons">
              <input className="tag-input-cancel" readOnly value="Cancel" type="cancel" onClick={() => this.handleClose("edit-tag")} />
              <input
                className="tag-input-submit"
                id="submit-tag"
                disabled={disabled}
                type="submit"
                value="Update tag" />
            </div>
          </form>;
        break;
      default:
        return null;
    }
    return (
      <div id="tag-modal" className="tag-modal animated fadeIn" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    );
  }
}
export default TagModal;

