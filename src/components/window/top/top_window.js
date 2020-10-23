import React from 'react';
import styles from '../window_layout.module.scss';

const TopWindow = () => {

  return (
    <>
      <div className={styles.ly_center}>
        <div className={styles.bl_topWindow} >
          <h2 className={`${styles.bl_topWindow_title} ${styles.center}`}>⚖️👑🍹<br/>さんばか1.5周年 <br/>おめでとうございます<br/>🎉🎉🎉</h2>
          <p className={`${styles.bl_topWindow_content} ${styles.center}`}>本サイトはさんばかが結成されてから<br />1.5周年をお祝いする非公式ファンサイトです.</p>
        </div>
      </div>
      <div className={styles.bl_scroll}>
        <a className={styles.scroll} href="#">Scroll</a>
      </div>
    </>
  );
};

export default TopWindow;

