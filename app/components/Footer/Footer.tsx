import React from 'react';

import styles from './Footer.styl';

const Footer: React.FC<{}> = () => (
  <footer className={styles.footer}>
    <span>Copyright © {(new Date).getFullYear()} Koach. All rights reserved.</span>
  </footer>
);

export default Footer;
