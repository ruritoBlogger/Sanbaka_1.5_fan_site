import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../window_layout.module.scss';
import Button from '../../parts/button';
import ScrollNavigator from '../../atoms/scrollNavigator';

const HistoryWindow = (props) => {
  const history = useHistory();

  const MoveHistoryPage = () => {
    window.scrollTo({top: 0});
    history.push("/road");
  }
  return (
    <>
      <div className={`${styles.ly_center} ${styles.flex_column}`}>
        <div className={`${styles.bl_window} ${styles.flex_row_reverse} ${styles.flex_only_smartphone_column_reverse}`} >
          <div className={styles.flex_column}>
            <div className={styles.flex_row}>
              <div className={styles.bl_window_flexFrame}>
                <img className={styles.bl_historyWindow_smallImg} src="https://i.ytimg.com/vi/pOXjuyKjD98/hqdefault.jpg" />
              </div>
              <div className={styles.bl_window_flexFrame}>
                <img className={styles.bl_historyWindow_largeImg} src="https://i.ytimg.com/vi/PcXH2IAXI_w/hqdefault.jpg" />
              </div>
              <div className={styles.bl_window_flexFrame}>
                <img className={styles.bl_historyWindow_smallImg} src="https://i.ytimg.com/vi/66Sj7l3sLcM/hqdefault.jpg" />
              </div>
            </div>
            <div className={styles.flex_row}>
              <div className={styles.bl_window_flexFrame}>
                <img className={styles.bl_historyWindow_largeImg} src="https://i.ytimg.com/vi/lPW5D3uHFvI/hqdefault.jpg" />
              </div>
              <div className={styles.bl_window_flexFrame}>
                <img className={styles.bl_historyWindow_smallImg} src="https://i.ytimg.com/vi/HWcemG6YO_U/hqdefault.jpg" />
              </div>
              <div className={styles.bl_window_flexFrame}>
                <img className={styles.bl_historyWindow_largeImg} src="https://i.ytimg.com/vi/S7f5htYwawA/hqdefault.jpg" />
              </div>
            </div>
          </div>
          <div className={styles.paddingRight}>
            <h2 className={styles.bl_window_title}>1.5周年までの道のり</h2>
            <p className={styles.bl_window_content}>
              さんばかが歩んできた道のりを<br/>
              アーカイブと一緒に振り返ってみるページ.<br />
              初コラボからいくつかアーカイブを<br/>
              ピックアップしています.
            </p>
            {(() => {
              if( props.isTop ) {
                return (
                  <div className={`${styles.centerComponent} ${styles.paddingBottom}`}>
                    <Button handleClick={ () => MoveHistoryPage()} msg="もっと詳しく" />
                  </div>
                )
              } else {
                return (
                  <div>
                    <p className={styles.bl_window_content}>
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
            <div className={styles.ly_center}>
              <ScrollNavigator msg={"Scroll"} />
            </div>
          )
        }
      })()}
    </>
  );
};

export default HistoryWindow;