import React from 'react';
import styles from '../window_layout.module.scss';

const InuiWindow = () => {

  return (
    <>
      <div className={styles.root}>
        <div className={styles.main} >
          <h3 className={`${styles.subtitle} ${styles.right}`}>公式つよつよケルベロス</h3>
          <h2 className={`${styles.title} ${styles.right}`}>戌亥とこ</h2>
          <p className={`${styles.content} ${styles.right}`}>いい感じの紹介文が欲しいわね...</p>
        </div>
      </div>
    </>
  );
};

export default InuiWindow;