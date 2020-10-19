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
      <div className={`${styles.root} ${styles.flex_column}`}>
        <div className={`${styles.main} ${styles.dynamic_flex_reverse}`} >
          <div className={styles.flex_column}>
            <div className={styles.flex_row}>
              <div className={styles.flex_img}>
                <img className={styles.img_small} src="https://i.ytimg.com/vi/pOXjuyKjD98/hqdefault.jpg" />
              </div>
              <div className={styles.flex_img}>
                <img className={styles.img_large} src="https://i.ytimg.com/vi/PcXH2IAXI_w/hqdefault.jpg" />
              </div>
              <div className={styles.flex_img}>
                <img className={styles.img_small} src="https://i.ytimg.com/vi/66Sj7l3sLcM/hqdefault.jpg" />
              </div>
            </div>
            <div className={styles.flex_row}>
              <div className={styles.flex_img}>
                <img className={styles.img_large} src="https://i.ytimg.com/vi/lPW5D3uHFvI/hqdefault.jpg" />
              </div>
              <div className={styles.flex_img}>
                <img className={styles.img_small} src="https://i.ytimg.com/vi/HWcemG6YO_U/hqdefault.jpg" />
              </div>
              <div className={styles.flex_img}>
                <img className={styles.img_large} src="https://i.ytimg.com/vi/S7f5htYwawA/hqdefault.jpg" />
              </div>
            </div>
          </div>
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
                  </div>
      </div>
      {(() => {
        if( !props.isTop ) {
          return (
            <div className={styles.center}>
              <a className={styles.scroll} href="#">Scroll</a>
            </div>
          )
        }
      })()}
    </>
  );
};

export default HistoryWindow;