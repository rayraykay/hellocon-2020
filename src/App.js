import React from 'react';

import MenuBar from './components/MenuBar';
import Landing from './components/Landing';
import About from './components/About';
import Countdown from './components/Countdown';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Contact from './components/Contact';

import './App.scss';

function App() {
  return (
    <>
      {/*<MenuBar />*/}
      <Landing />
      <About />
      <Countdown />
      <Speakers />
      <Schedule />
      <Contact />
    </>
  );
}

export default App;
