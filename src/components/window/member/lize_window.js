import React from 'react';
import IconButton from '../../parts/icon_button';
import styles from '../window_layout.module.scss';

const LizeWindow = () => {
  const MoveToYoutube = () => {
    window.open("https://www.youtube.com/channel/UCZ1xuCK1kNmn5RzPYIZop3w?sub_confirmation=1", "_blank")
  }

  const MoveToTwitter = () => {
    window.open("https://twitter.com/Lize_Helesta", "_blank")
  }
  return (
    <>
      <div className={`${styles.root} ${styles.color_lize}`}>
        <div className={`${styles.main} ${styles.flex}`} >
          <div className={`${styles.right_padding} ${styles.margin_top_twice}`}>
            <h3 className={styles.subtitle}>文武両道人望ゲキアツプリンセス</h3>
            <h2 className={styles.title}>リゼ・ヘルエスタ</h2>
            <p className={styles.content}>
              ヘルエスタ王国の第二皇女.<br/>
              文武両道学園主席<br/>
              真面目で誰にでも優しくかなりの人望がある.<br/>
              王位継承の資格者として<br/>
              日々鍛錬や人とのコミュニケーションを大事にしている.
            </p>
            <div className={`${styles.flex_row} ${styles.margin_top}`}>
              <IconButton handleClick={() => MoveToYoutube()} link={`${window.location.origin}/image/youtube.png`} />
              <IconButton handleClick={() => MoveToTwitter()} link={`${window.location.origin}/image/twitter.png`} />
            </div>
          </div>
          <div className={styles.char_frame}>
            <div className={styles.balloon1}>
              <p className={styles.char_msg}>あんでだよぉーー！！</p>
            </div>
            <img className={styles.char_img} src={`${window.location.origin}/image/lize.png`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LizeWindow;