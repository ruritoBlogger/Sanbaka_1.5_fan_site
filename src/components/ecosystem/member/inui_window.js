import React from 'react';
import IconButton from '../../atoms/button/icon_button';
import CharMessage from '../../molecules/charMessage';
import styles from '../window_layout.module.scss';

const InuiWindow = () => {
  const MoveToYoutube = () => {
    window.open("https://www.youtube.com/channel/UCXRlIK3Cw_TJIQC5kSJJQMg?sub_confirmation=1", "_blank")
  }

  const MoveToTwitter = () => {
    window.open("https://twitter.com/inui_toko", "_blank")
  }

  return (
    <>
      <div className={`${styles.ly_center} ${styles.color_inui}`}>
        <div className={`${styles.bl_window_small} ${styles.flex_column_onlySmartphone}`} >
          <CharMessage msg={'アハーーー↑↑↑'} path={'/image/inui.png'} />
          <div className={`${styles.paddingLeft_pcOnly} ${styles.marginTop}`}>
            <h3 className={`${styles.bl_window_subtitle}`}>公式つよつよケルベロス</h3>
            <h2 className={`${styles.bl_window_title}`}>戌亥とこ</h2>
            <p className={`${styles.bl_window_content}`}>
              寂れた和風喫茶で働く女の子. <br/>
              店長の趣味でメイド服を着せられている.<br/>
              足下に見え隠れする尻尾が本物かどうかは<br/>
              触れた人のみぞ知る.<br/>
              満月の夜は何か不思議な事が起きるらしい？
            </p>
            <div className={`${styles.flex_row} ${styles.centerComponent} ${styles.marginTop}`}>
              <IconButton handleClick={() => MoveToYoutube()} link={`${window.location.origin}/image/youtube.png`} />
              <IconButton handleClick={() => MoveToTwitter()} link={`${window.location.origin}/image/twitter.png`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InuiWindow;