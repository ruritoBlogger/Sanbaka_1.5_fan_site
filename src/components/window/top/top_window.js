import React from 'react';
import styles from '../window_layout.module.scss';

const TopWindow = () => {

  return (
    <>
      <div className={styles.root}>
        <div className={styles.main} >
          <h2 className={`${styles.title} ${styles.center}`}>⚖️👑🍹<br/>さんばか1.5周年 <br/>おめでとうございます<br/>🎉🎉🎉</h2>
          <p className={`${styles.content} ${styles.center}`}>本サイトはさんばかが結成されてから<br />1.5周年をお祝いする非公式ファンサイトです.</p>
        </div>
      </div>
      <div className={`${styles.center} ${styles.only_pc}`}>
        <a className={`${styles.scroll} ${styles.only_pc}`} href="#">Scroll</a>
      </div>
    </>
  );
};

export default TopWindow;

