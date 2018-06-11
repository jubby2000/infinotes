import React from 'react';
import SidebarContainer from './sidebar_container';
import NotebooksContainer from './notebooks_container';
import ModalContainer from '../modal/modal_container';
import NotebookModalContainer from '../modal/notebook_modal_container';

const Home = () => (
  <div>
    <SidebarContainer />
    <ModalContainer panel="notebook"/>
    {/* <ModalContainer panel="tag"/> */}
    <NotebookModalContainer />

    
    {/* <NotesListContainer />
    <NotesContainer /> */}
  </div>
);

export default Home;