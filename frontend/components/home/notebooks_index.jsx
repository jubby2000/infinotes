import React from 'react';

class NotebooksIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllNotebooks();
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
              <li key={notebook.id}>
                <div>
                  <p className="notebook-title">{notebook.title}</p>
                  <p className="notes-count">0 notes</p>
                </div>
                <div className="notebook-actions">
                  <div className="edit-icon" onClick={() => this.props.openModal("edit-notebook", notebook)}></div>
                  <div className="delete-icon" onClick={() => this.props.deleteNotebook(notebook.id)}></div>
                </div>
              </li>
            )
            )}
          </ul>

        </div>
    );
  }
}

export default NotebooksIndex;