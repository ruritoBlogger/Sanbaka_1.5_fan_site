import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../window_layout.module.scss';
import Button from '../../parts/button';

const HistoryWindow = (props) => {
  const history = useHistory();

  const MoveHistoryPage = () => {
    window.scrollTo({top: 0});
    history.push("/road");
  }
  return (
    <>
      <div className={styles.root}>
        <div className={`${styles.main} ${styles.flex}`} >
          <div className={styles.right_padding}>
            <h2 className={`${styles.title} ${styles.center}`}>1.5周年までの道のり</h2>
            <p className={`${styles.content} ${styles.center}`}>
              さんばかが歩んできた道のりを<br/>
              アーカイブと一緒に振り返ってみるページ.<br />
              初コラボからいくつかアーカイブを<br/>
              ピックアップしています.
            </p>
            {(() => {
              if( props.isTop ) {
                return (
                  <div className={styles.center_component}>
                    <Button handleClick={ () => MoveHistoryPage()} msg="もっと詳しく" />
                  </div>
                )
              } else {
                return (
                  <div>
                    <p className={`${styles.content} ${styles.center}`}>
                      マイクラコラボが中心となってます.
                    </p>
                  </div>
                )
              }
            })()}
        </div>
          <div className={styles.flex_column}>
            <div className={styles.flex_row}>
              <div className={styles.flex_img}>
                <img className={styles.img_small} src="https://i.ytimg.com/vi/ZlpG8R_biw4/hqdefault.jpg" />
              </div>
              <div className={styles.flex_img}>
                <img className={styles.img_large} src="https://i.ytimg.com/vi/ZlpG8R_biw4/hqdefault.jpg" />
              </div>
              <div className={styles.flex_img}>
                <img className={styles.img_small} src="https://i.ytimg.com/vi/ZlpG8R_biw4/hqdefault.jpg" />
              </div>
            </div>
            <div className={styles.flex_row}>
              <div className={styles.flex_img}>
                <img className={styles.img_large} src="https://i.ytimg.com/vi/ZlpG8R_biw4/hqdefault.jpg" />
              </div>
              <div className={styles.flex_img}>
                <img className={styles.img_small} src="https://i.ytimg.com/vi/ZlpG8R_biw4/hqdefault.jpg" />
              </div>
              <div className={styles.flex_img}>
                <img className={styles.img_large} src="https://i.ytimg.com/vi/ZlpG8R_biw4/hqdefault.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryWindow;