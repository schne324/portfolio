import React from 'react';
import Tile from '../Tile';
import './style.css';

const Talks = () => (
  <div className='sect talks'>
    <h3>Talks</h3>
    <div className='tiles'>
      <Tile
        name={'2017 CSUN Presentation: Advanced ARIA'}
        links={{
          slides: 'https://schne324.github.io/csun-advanced-aria/',
          repo: 'https://github.com/schne324/csun-advanced-aria'
        }}
        image={'/images/csun.png'}
      >
        <p>
          I gave a 2017 CSUN presentation on the topic of Advanced ARIA / Complex Widgets. The slides
           were built in react.
        </p>
      </Tile>
      <Tile
        name={'CodeMash 2018 Presentation: Designers and Developers Working Together - Mass Hysteria!'}
        links={{
          slides: 'https://schne324.github.io/combobo-talk-slides/',
          repo: 'https://github.com/schne324/combobo-talk-slides'
        }}
        image={'/images/code-mash-2018.png'}
      >
        <p>
          I co-presented at CodeMash 2018 about developers and designers collaborating on accessible UI components.
        </p>
      </Tile>
    </div>
  </div>
);

export default Talks;
