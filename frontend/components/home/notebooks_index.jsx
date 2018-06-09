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
              onClick={() => this.props.openModal({ modal: "add-notebook" })}></button>
          </div>
          <ul className="notebook-list">
            {this.props.notebooks.map(notebook => (
              <li key={notebook.id}>
                <p className="notebook-title">{notebook.title}</p>
                <p className="notes-count">0 notes</p>
              </li>
            )
            )}
          </ul>

        </div>
    );
  }
}

export default NotebooksIndex;