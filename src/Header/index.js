import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class LinkItem extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { to, icon, label } = this.props;
    return (
      <li>
        <a href={to} aria-label={label} rel='noopener noreferrer' target='_blank'>
          <div className={'fa ' + icon} aria-hidden='true' />
        </a>
      </li>
    );
  }
}

LinkItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default class Header extends Component {
  render() {
    return (
      <header className='sect' id='home'>
        <div className='title'>
          <h1>Harris Schneiderman</h1>
          <h2>Developer of stuff and things</h2>
        </div>
        <ul className='links'>
          <LinkItem
          to='https://twitter.com/theHarrisius'
          icon='fa-twitter'
          label='Twitter'
          />
          <LinkItem
            to='https://github.com/schne324'
            icon='fa-github-alt'
            label='Github'
          />
          <LinkItem
            to='mailto:me@harris-schneiderman.com'
            icon='fa-envelope-o'
            label='Email'
          />
        </ul>
      </header>
    );
  }
}
