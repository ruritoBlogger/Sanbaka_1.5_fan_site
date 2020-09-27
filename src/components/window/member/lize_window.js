import React from 'react';
import styles from '../window_layout.module.scss';

const LizeWindow = () => {

  return (
    <>
      <div className={styles.root}>
        <div className={styles.main} >
          <h3 className={styles.subtitle}>人望激アツプリンセス</h3>
          <h2 className={styles.title}>リゼ・ヘルエスタ</h2>
          <p className={styles.content}>いい感じの紹介文が欲しいわね...</p>
        </div>
      </div>
    </>
  );
};

export default LizeWindow;