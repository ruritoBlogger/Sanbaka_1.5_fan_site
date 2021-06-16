import ScrollNavigator from '../../atoms/scrollNavigator';
import styles from '../window_layout.module.scss';

/**
 * トップページの一番上に表示する要素
 */
const TopWindow: React.VFC = () => (
  <>
    <div className={styles.ly_center}>
      <div className={styles.bl_window}>
        {/* FIXME: 解像度によっては変な部分で改行される */}
        <h2 className={styles.bl_window_title}>
          <span role="img" aria-label="三人のファンマーク">⚖️👑🍹</span>
          <br />
          さんばか1.5周年
          <br />
          おめでとうございます
          <br />
          <span role="img" aria-label="お祝いのクラッカー">🎉🎉🎉</span>
        </h2>
        <p className={styles.bl_window_content}>
          本サイトはさんばかが結成されてから
          <br />
          1.5周年をお祝いする非公式ファンサイトです.
        </p>
      </div>
    </div>
    <div className={styles.bl_scroll}>
      <ScrollNavigator msg="Scroll" isOnlyPC={false} />
    </div>
  </>
);

export default TopWindow;
