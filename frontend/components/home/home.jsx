import React from 'react';
import SidebarContainer from './sidebar_container';
import NotebooksContainer from './notebooks_container';
import ModalContainer from '../modal/modal_container';

const Home = () => (
  <div>
    <SidebarContainer />
    <ModalContainer panel="notebook"/>
    {/* <ModalContainer panel="tag"/> */}
    {/* <NotesListContainer />
    <NotesContainer /> */}
  </div>
);

export default Home;