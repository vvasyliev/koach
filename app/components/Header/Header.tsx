import React, { Component } from 'react';

import NavigationLink from '../common/NavigationLink/NavigationLink';

import styles from './Header.styl';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h2 className={styles.logo}>KOACH</h2>
        <nav className={styles.navigation}>
          <NavigationLink to='/'>Home</NavigationLink>
          <NavigationLink to='popular'>Popular</NavigationLink>
          <NavigationLink to='all'>All</NavigationLink>
          <NavigationLink to='users'>Users</NavigationLink>
          <NavigationLink to='more'>More</NavigationLink>
        </nav>
        <section>
          profile
        </section>
      </header>
    )
  }
}

export default Header;
