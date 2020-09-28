import React from 'react';
import styles from '../window_layout.module.scss';

const AngeWindow = () => {

  return (
    <>
      <div className={`${styles.root} ${styles.color_ange}`}>
        <div className={styles.main} >
          <h3 className={`${styles.subtitle} ${styles.right}`}>公式美少女錬金術師ライバー</h3>
          <h2 className={`${styles.title} ${styles.right}`}>アンジュ・カトリーナ</h2>
          <p className={`${styles.content} ${styles.right}`}>いい感じの紹介文が欲しいわね...</p>
        </div>
      </div>
    </>
  );
};

export default AngeWindow;