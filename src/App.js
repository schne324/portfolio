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
        <div className="site">
          <p>
            <span aria-hidden="true" className="fa fa-info" />
            <span>
            Check out my work-in-progress portfolio site over at{' '}
            <a href="https://harris.schneiderman.dev">harris.schneiderman.dev</a>
            </span>
          </p>
        </div>
        <Banner />
        <Projects />
        <Talks />
      </main>
      <Footer />
    </div>
  </div>
);

export default App;
