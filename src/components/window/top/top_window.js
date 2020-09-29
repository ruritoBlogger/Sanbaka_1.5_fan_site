import React from 'react';
import styles from '../window_layout.module.scss';

const TopWindow = () => {

  return (
    <>
      <div className={styles.root}>
        <div className={styles.main} >
          <h2 className={`${styles.title} ${styles.center}`}>⚖ 👑🍹<br/>さんばか1.5周年 <br/>おめでとうございます🎉🎉🎉</h2>
          <p className={`${styles.content} ${styles.center}`}>本サイトはさんばかの皆さんがデビューしてから<br />1.5周年をお祝いする非公式ファンサイトです.</p>
        </div>
      </div>
    </>
  );
};

export default TopWindow;

