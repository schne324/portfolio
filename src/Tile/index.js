import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const text = { demo: 'Demo', repo: 'GitHub', npm: 'NPM', slides: 'Slides' };
const Tile = ({ name, links, children, image }) => (
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
      {
        Object.keys(links).map((key, i) => {
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
        })
      }
    </div>
  </div>
);

Tile.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  links: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired
};

export default Tile;
