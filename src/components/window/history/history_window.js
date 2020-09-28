import React from 'react';
import styles from '../window_layout.module.scss';

const HistoryWindow = () => {

  return (
    <>
      <div className={styles.root}>
        <div className={`${styles.main} ${styles.flex}`} >
          <div className={styles.right_padding}>
            <h2 className={styles.title}>1.5周年までの道のり</h2>
            <p className={styles.content}>いい感じの紹介文が欲しいわね...</p>
          </div>
          <div className={styles.flex_column}>
            <div className={styles.flex_row}>
              <div className={styles.flex_img}>
                <img className={styles.img_small} src="https://i.ytimg.com/vi/ZlpG8R_biw4/hqdefault.jpg" />
              </div>
              <div className={styles.flex_img}>
                <img className={styles.img_large} src="https://i.ytimg.com/vi/ZlpG8R_biw4/hqdefault.jpg" />
              </div>
            </div>
            <div className={styles.flex_row}>
              <div className={styles.flex_img}>
                <img className={styles.img_large} src="https://i.ytimg.com/vi/ZlpG8R_biw4/hqdefault.jpg" />
              </div>
              <div className={styles.flex_img}>
                <img className={styles.img_small} src="https://i.ytimg.com/vi/ZlpG8R_biw4/hqdefault.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryWindow;