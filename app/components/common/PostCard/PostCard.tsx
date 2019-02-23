import React, { Component } from 'react';
import dayjs from 'dayjs';
import { MessageSquare, Share, Save } from 'react-feather';


import styles from './PostCard.styl';


class PostCard extends Component {
  render() {
    return (
      <article className={styles.postCard}>
        <section className={styles.postCardInfo}>
          <span className={styles.postCardUsername}>Anonymous</span>
          <span>{dayjs('2019-02-02').fromNow()}</span>
        </section>
        <h3 className={styles.postCardTitle}>
          My version of leftism is superior to your ever so slightly different
          from of leftism
        </h3>
        <span className={styles.postCardDescription}>
          As soon as I upgraded to Mojave I had been experiencing rapid battery
          drain while my MBP (2016 15" touchbar) had its lid closed. Seems like
          it's a common occurrence in the community. For me, the problem went
          away the moment I removed the dynamic desktop (the one that looks
          different at different times of the day, a new feature with Mojave),
          and went back to a standard one. All the solutions I have seen so far
          involve changing settings in terminal, or shutting things down when
          all you want is the operationality of the previous OS. I hope what
          I've found works for you as well.
        </span>
        <section className={styles.postCardControls}>
          <div className={styles.postCardAction}>
            <MessageSquare size={18} />
            <span className={styles.postCardActionLabel}>123 comments</span>
          </div>
          <div className={styles.postCardAction}>
            <Share size={18} />
            <span className={styles.postCardActionLabel}>Share</span>
          </div>
          <div className={styles.postCardAction}>
            <Save size={18} />
            <span className={styles.postCardActionLabel}>Save</span>
          </div>
        </section>
      </article>
    );
  }
}

export default PostCard;
