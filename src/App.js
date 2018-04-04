import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Projects from './Projects';
import Talks from './Talks';
import Footer from './Footer';
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
      <Footer />
    </div>
  </div>
);

export default App;
