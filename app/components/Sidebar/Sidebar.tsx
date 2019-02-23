import React, { Component } from 'react';
import { TrendingUp, Sun, Coffee, Save, Star } from 'react-feather';

import SidebarNavItem from '../common/SidebarNavItem/SidebarNavItem';
import { FilterType } from '../../contants/types';

import styles from './Sidebar.styl';

export interface ISidebarState {
  activeFilter: FilterType;
}

const initialState = {
  activeFilter: 'POPULAR' as FilterType
};

class Sidebar extends Component<{}, ISidebarState> {
  readonly state = initialState;

  setActiveFilter = (activeFilter: FilterType) =>
    this.setState({ activeFilter });

  render() {
    const { activeFilter } = this.state;

    return (
      <aside className={styles.sidebar}>
        <section className={styles.sidebarNavigation}>
          <SidebarNavItem
            isActive={activeFilter === 'POPULAR'}
            icon={TrendingUp}
            onClick={() => this.setActiveFilter('POPULAR')}>
            Popular
          </SidebarNavItem>
          <SidebarNavItem
            isActive={activeFilter === 'HOT'}
            icon={Sun}
            onClick={() => this.setActiveFilter('HOT')}>
            Hot
          </SidebarNavItem>
          <SidebarNavItem
            isActive={activeFilter === 'NEW'}
            icon={Coffee}
            onClick={() => this.setActiveFilter('NEW')}>
            New
          </SidebarNavItem>
          <SidebarNavItem
            isActive={activeFilter === 'SAVED'}
            icon={Save}
            onClick={() => this.setActiveFilter('SAVED')}>
            Saved
          </SidebarNavItem>
          <SidebarNavItem
            isActive={activeFilter === 'LIKED'}
            icon={Star}
            onClick={() => this.setActiveFilter('LIKED')}>
            Liked
          </SidebarNavItem>
        </section>
      </aside>
    );
  }
}

export default Sidebar;
