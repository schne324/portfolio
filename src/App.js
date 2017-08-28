import React, { Component } from 'react';

import Header from './Header';
import Projects from './Projects';
import './App.css';

export default class App extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div id='outer-container'>
        <div id='page-wrap'>
          <Header />
          <Projects />
        </div>
      </div>
    );
  }
}
