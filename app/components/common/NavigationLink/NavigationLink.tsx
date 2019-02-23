import React from 'react';
import classNames from 'classnames';
import { Link } from '@reach/router';

import styles from './NavigationLink.styl';

export interface INavigationLinkProps {
  to: string;
  children: React.ReactChild;
}

export interface ILinkProps {
  isCurrent: boolean;
}

const NavigationLink: React.SFC<INavigationLinkProps> = ({ to, children }) => {
  const getProps = ({ isCurrent }: ILinkProps) => ({
    className: classNames(styles.navigationLink, {
      [styles.activeLink]: isCurrent
    })
  });

  return (
    <Link to={to} getProps={getProps}>
      {children}
    </Link>
  );
};

export default NavigationLink;
