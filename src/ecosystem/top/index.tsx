import ScrollNavigator from "../../atoms/scrollNavigator";
import styles from "./index.module.scss";

/**
 * トップページの一番上に表示する要素
 */
const TopWindow: React.FC = () => (
  <div className={styles.inner}>
    <div className={styles.content_block}>
      {/* FIXME: 解像度によっては変な部分で改行される */}
      <h2 className={styles.title}>
        <span role="img" aria-label="三人のファンマーク">
          ⚖️👑🍹
        </span>
        <br />
        さんばか1.5周年
        <br />
        おめでとうございます
        <br />
        <span role="img" aria-label="お祝いのクラッカー">
          🎉🎉🎉
        </span>
      </h2>
      <p className={styles.content}>
        本サイトはさんばかが結成されてから
        <br />
        1.5周年をお祝いする非公式ファンサイトです.
      </p>
    </div>
    <div className={styles.scroll_wrapper}>
      <ScrollNavigator msg="Scroll" isOnlyPC={false} />
    </div>
  </div>
);

export default TopWindow;
