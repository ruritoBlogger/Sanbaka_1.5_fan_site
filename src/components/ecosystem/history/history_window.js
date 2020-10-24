import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../window_layout.module.scss';

// HACK: atomsからのimportを簡略化する
// ex: import ~ from '@/atoms/animationButtton

import AnimationButton from '../../atoms/animationButton';
import ScrollNavigator from '../../atoms/scrollNavigator';
import LargeThumbnail from '../../atoms/largeThumbnail';
import SmallThumbnail from '../../atoms/smallThumbnail';

const HistoryWindow = (props) => {
  const history = useHistory();

  const MoveHistoryPage = () => {
    window.scrollTo({top: 0});
    history.push("/road");
  }
  return (
    <>
      <div className={`${styles.ly_center} ${styles.flex_column}`}>
        <div className={`${styles.bl_window} ${styles.flex_row_reverse} ${styles.flex_column_onlySmartphone}`} >
          <div className={styles.flex_column}>
            <div className={styles.flex_row}>
              <SmallThumbnail youtubeID="pOXjuyKjD98" />
              <LargeThumbnail youtubeID="PcXH2IAXI_w" />
              <SmallThumbnail youtubeID="66Sj7l3sLcM" />
            </div>
            <div className={styles.flex_row}>
              <LargeThumbnail youtubeID="lPW5D3uHFvI" />
              <SmallThumbnail youtubeID="HWcemG6YO_U" />
              <LargeThumbnail youtubeID="S7f5htYwawA" />
            </div>
          </div>
          <div className={styles.paddingRight_pcOnly}>
            {/* FIXME: 解像度によっては変な部分で改行される */}
            <h2 className={styles.bl_window_title}>1.5周年までの道のり</h2>
            <p className={styles.bl_window_content}>
              さんばかが歩んできた道のりを<br/>
              アーカイブと一緒に振り返ってみるページ.<br />
              初コラボからいくつかアーカイブを<br/>
              ピックアップしています.
            </p>
            {(() => {
              if( props.isTop ) {
                return(
                  <div className={`${styles.centerComponent} ${styles.paddingBottom} ${styles.marginTop}`}>
                    <AnimationButton handleClick={ () => MoveHistoryPage()} msg="もっと詳しく" />
                  </div>
                )
              } else {
                return (
                  <div className={`${styles.centerComponent} ${styles.paddingBottom}`}>
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