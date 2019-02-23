import React from 'react';
import classNames from 'classnames';

import styles from './SidebarNavItem.styl';

export interface ISidebarNavItemProps {
  isActive?: boolean;
  icon: React.ReactType;
  children: React.ReactNode;
  onClick: () => void;
}

const SidebarNavItem: React.SFC<ISidebarNavItemProps> = ({
  isActive = false,
  icon: Icon,
  onClick,
  children
}) => {
  const sidebarNavItemClassName: string = classNames(styles.sidebarNavItem, {
    [styles.sidebarNavItemActive]: isActive
  })

  return (
    <div className={sidebarNavItemClassName} onClick={onClick}>
      <Icon />
      <span className={styles.sidebarNavLabel}>{children}</span>
    </div>
  );
};

export default SidebarNavItem;
