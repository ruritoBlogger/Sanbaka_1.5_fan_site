import Router from "next/router";

import styles from "./index.module.scss";

// HACK: atomsからのimportを簡略化する
// ex: import ~ from '@/atoms/animationButtton

import AnimationButton from "../../atoms/button/animationButton";
import ScrollNavigator from "../../atoms/scrollNavigator";
import LargeThumbnail from "../../atoms/thubnail/largeThumbnail";
import SmallThumbnail from "../../atoms/thubnail/smallThumbnail";

interface Props {
  isTop: boolean;
}

/**
 * 1.5周年までの道のりページの概要を表示する
 * ページの一番上に表示する場合はスクロールを促すコンポーネントを表示する
 * そうで無い場合は1.5周年までの道のりページへの遷移ボタンを表示する
 * @param {boolean} isTop: ページの一番上に表示するか否か
 */
const HistoryWindow: React.FC<Props> = ({ isTop }) => {
  /**
   * 1.5周年までの道のりページに遷移する
   * 遷移前には画面トップにスクロールしておく
   */
  const MoveHistoryPage = () => {
    window.scrollTo({ top: 0 });
    Router.push("/road");
  };

  return (
    <div className={styles.inner}>
      <div className={styles.image_block}>
        {/* HACK: 解像度によっては変な部分で改行される */}
        <h2 className={styles.title}>1.5周年までの道のり</h2>
        <p className={styles.content}>
          さんばかが歩んできた道のりを
          <br />
          アーカイブと一緒に振り返ってみるページ.
          <br />
          初コラボからいくつかアーカイブを
          <br />
          ピックアップしています.
        </p>
        {(() => {
          if (isTop) {
            return (
              <div className={styles.button_wrapper}>
                <AnimationButton
                  handleClick={() => MoveHistoryPage()}
                  msg="もっと詳しく"
                />
              </div>
            );
          } else {
            return (
              <div
                className={`${styles.centerComponent} ${styles.paddingBottom}`}
              >
                <p className={styles.bl_historyWindow_content}>
                  マイクラコラボが中心となってます.
                </p>
              </div>
            );
          }
        })()}
      </div>
      <div className={styles.thumbnail_block}>
        <div className={styles.thumbnail_line}>
          <SmallThumbnail youtubeID="pOXjuyKjD98" />
          <LargeThumbnail youtubeID="PcXH2IAXI_w" />
          <SmallThumbnail youtubeID="66Sj7l3sLcM" />
        </div>
        <div className={styles.thumbnail_line}>
          <LargeThumbnail youtubeID="lPW5D3uHFvI" />
          <SmallThumbnail youtubeID="HWcemG6YO_U" />
          <LargeThumbnail youtubeID="S7f5htYwawA" />
        </div>
      </div>
      {(() => {
        if (isTop) {
          return (
            <div className={styles.scroll_wrapper}>
              <ScrollNavigator msg="Scroll" isOnlyPC={false} />
            </div>
          );
        } else return null;
      })()}
    </div>
  );
};

export default HistoryWindow;
