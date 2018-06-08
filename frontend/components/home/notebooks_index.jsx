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
        <ul>
          {this.props.notebooks.map(notebook => (
            <li key={notebook.id}>notebook.title</li>
          )
          )}
        </ul>
    );
  }
}

export default NotebooksIndex;