import React, { Component } from 'react';
import styles from './Home.styl';

import PostCard from '../../components/common/PostCard/PostCard';
import Sidebar from '../../components/Sidebar/Sidebar';
import { IRoute } from '../../contants/types';

export interface IHomeProps extends IRoute {}

class Home extends Component<IHomeProps> {
  render() {
    return (
      <section className={styles.home}>
        <Sidebar />
        <section className={styles.postCardContainer}>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </section>
      </section>
    );
  }
}

export default Home;
