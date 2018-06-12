import React from 'react';
import SidebarContainer from './sidebar_container';
import NotebooksContainer from './notebooks_container';
import ModalContainer from '../modal/modal_container';
import NotebookModalContainer from '../modal/notebook_modal_container';
import NotesIndexContainer from './notes_index_container';
import NoteModalContainer from '../modal/note_modal_container';

const Home = () => (
  <div>
    <SidebarContainer />
    <ModalContainer panel="notebook"/>
    {/* <ModalContainer panel="tag"/> */}
    <NotebookModalContainer />
    <NotesIndexContainer />
    <NoteModalContainer modal="new-note"/>
    
    {/* <NotesListContainer />
    <NotesContainer /> */}
  </div>
);

export default Home;