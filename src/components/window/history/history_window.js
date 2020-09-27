import React from 'react';
import styles from '../window_layout.module.scss';

const HistoryWindow = () => {

  return (
    <>
      <div className={styles.root}>
        <div className={styles.main} >
          <h2 className={styles.title}>1.5周年までの道のり</h2>
          <p className={styles.content}>いい感じの紹介文が欲しいわね...</p>
        </div>
      </div>
    </>
  );
};

export default HistoryWindow;