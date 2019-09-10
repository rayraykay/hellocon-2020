import React from 'react';

import MenuBar from './components/MenuBar';
import Landing from './components/Landing';
import Contact from './components/Contact';
import About from './components/About';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';

import './App.scss';

function App() {
  return (
    <>
      <MenuBar />
      <Landing />
      <About />
      <Speakers />
      <Schedule />
      <Contact />
    </>
  );
}

export default App;
