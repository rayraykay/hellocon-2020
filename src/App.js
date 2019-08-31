import React from 'react';

import MenuBar from './components/MenuBar';
import Landing from './components/Landing';
import './App.scss';
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <MenuBar />
      <Landing />
      <Contact />
    </>
  );
}

export default App;
