import styles from "./index.module.scss";

interface Props {
  path: string;
}

/**
 * 各キャラの画像のコンポーネント
 * @param {string} path: 表示したい画像のパス
 */

const CharImage: React.FC<Props> = ({ path }) => (
  <div className={styles.wrapper}>
    <div className={styles.frame}>
      <img className={styles.image} src={path} alt="各キャラクターの画像" />
    </div>
  </div>
);

export default CharImage;
