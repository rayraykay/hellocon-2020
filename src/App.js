import React from 'react';

import MenuBar from './components/MenuBar';
import Landing from './components/Landing';
import About from './components/About';
import Countdown from './components/Countdown';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';

import './App.scss';

function App() {
  return (
    <>
      <MenuBar />
      <Landing />
      <About />
      <Countdown />
      <Speakers />
      <Schedule />
      <Sponsors />
      <Contact />
    </>
  );
}

export default App;
