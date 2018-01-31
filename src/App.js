import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Projects from './Projects';
import Talks from './Talks'
import './App.css';

const App = () => (
  <div id='outer-container'>
    <div id='page-wrap'>
      <Header />
      <main>
        <Banner />
        <Projects />
        <Talks />
      </main>
    </div>
  </div>
);

export default App;
