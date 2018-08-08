import React from 'react';
import NotebooksIndexItem from './notebooks_index_item';

class NotebooksIndex extends React.Component {

  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    this.props.getAllNotebooks();
    this.props.getAllNotes();
  }

  handleFilter(notebook) {
    this.props.getNotebookNotes(notebook.id)
      .then(() => this.props.addFilter("notebook", notebook))
      .then(() => this.props.closePanelModal("notebook"));
  }

  render() {
    return (
        <div>
          <div className="notebooks-header">
            <h2>Notebooks</h2>
            <button 
              className="add-notebook" 
              onClick={() => this.props.openModal("add-notebook")}></button>
          </div>
          <ul className="notebook-list">
            {this.props.notebooks.map(notebook => (
              <NotebooksIndexItem
                key={notebook.id}
                notebook={notebook}
                handleFilter={this.handleFilter}
                openModal={this.props.openModal}
                deleteNotebook={this.props.deleteNotebook}
              />
            )
            )}
          </ul>

        </div>
    );
  }
}

export default NotebooksIndex;