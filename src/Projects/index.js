import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Projects extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className='sect projects' id='projects'>
        <h3>Projects</h3>
        <div className='tiles'>
          <Tile
            name={'Cauldron (Deque Pattern Library)'}
            links={{
              demo: 'https://pattern-library.dequelabs.com/',
              repo: 'https://github.com/dequelabs/pattern-library',
              npm: 'https://www.npmjs.com/package/deque-pattern-library'
            }}
            image={'/images/cauldron.png'}
          >
            <p>
              I am the lead developer on Cauldron, a fully accessible HTML, CSS, and Javascript front-end framework
               for creating web and mobile applications.
             </p>
          </Tile>
          <Tile
            name={'Dragon Drop'}
            links={{
              demo: 'https://schne324.github.io/dragon-drop/demo/',
              repo: 'https://github.com/schne324/dragon-drop',
              npm: 'https://www.npmjs.com/package/drag-on-drop'
            }}
            image={'/images/dragon.png'}
          >
            <p>
              Dragon drop is a fully configurable, accessible drag-and-drop reorder module. It provides
               a way for keyboard, mouse, and assistive technology users to reorder items in a list.
            </p>
          </Tile>
          <Tile
            name={'Combobo'}
            links={{
              demo: 'https://schne324.github.io/combobo/demo/',
              repo: 'https://github.com/schne324/combobo',
              npm: 'https://www.npmjs.com/package/combobo'
            }}
            image={'/images/combobo.png'}
          >
            <p>
              Combobo is an accessible combobox module I created.  It is highly
               customizable and supports single-select and multi-select.
            </p>
          </Tile>
          <Tile
            name={'React Offscreen'}
            links={{
              repo: 'https://github.com/schne324/react-offscreen',
              npm: 'https://www.npmjs.com/package/react-offscreen'
            }}
            image={'/images/react-offscreen.png'}
          >
            <p>React offscreen is a react component for creating offscreen text.</p>
          </Tile>
          <Tile
            name={'Concerto'}
            links={{
              demo: 'https://schne324.github.io/concerto/',
              repo: 'https://github.com/schne324/concerto'
            }}
            image={'/images/concerto.png'}
          >
            <p>
              {'Concerto is a simple react app which documents the many concerts I\'ve attended.'}
            </p>
          </Tile>
          <Tile
            name={'Live Region'}
            links={{
              repo: 'https://github.com/schne324/live-region',
              npm: 'https://www.npmjs.com/package/live-region'
            }}
            image={'/images/live-region.png'}
          >
            <p>
              Live region is a simple configurable aria live region module. You can configure
               the
               <code>{'role'}</code>
               <code>{'aria-live'}</code>
               <code>{'aria-relevant'}</code>
               and
               <code>{'aria-atomic'}</code>
               attributes.
            </p>
          </Tile>
        </div>
        <p>...and many more available on my
          <a
            href='https://github.com/schne324'
            rel='noopener noreferrer'
            target='_blank'
          >
            GitHub
          </a>
        </p>
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
  }
}

class Tile extends Component {
  render() {
    const { name, links, children, image } = this.props;
    const text = { demo: 'Demo', repo: 'GitHub', npm: 'NPM', slides: 'Slides' };
    const resources = Object.keys(links).map((key, i) => {
      return (
        <a
          href={links[key]}
          className={key}
          key={i}
          rel='noopener noreferrer'
          target='_blank'
        >
          {text[key]}
        </a>);
    });
    return (
      <div className='tile'>
        <div className='tile-header'>
          <h4>{name}</h4>
        </div>
        <div className='tile-image'>
          <img role='presentation' src={image} />
        </div>
        <div className='tile-content'>
          {children}
        </div>
        <div className='tile-footer'>
          {resources}
        </div>
      </div>
    );
  }
}

Tile.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  links: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired
};
