import React from 'react';
import styles from '../window_layout.module.scss';

const AngeWindow = () => {

  return (
    <>
      <div className={`${styles.root} ${styles.color_ange}`}>
        <div className={styles.main} >
          <h3 className={`${styles.subtitle} ${styles.right}`}>公式美少女錬金術師ライバー</h3>
          <h2 className={`${styles.title} ${styles.right}`}>アンジュ・カトリーナ</h2>
          <p className={`${styles.content} ${styles.right}`}>
            ボロボロの小屋で時間を忘れて<br/>錬金術の研究に明け暮れている.<br/>
            大人っぽい女性的な体に憧れており<br/>実はその研究をしているとかしていないとか.
          </p>
          <div className={`${styles.flex_row} ${styles.right_component}`}>
            <p>Youtube</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AngeWindow;