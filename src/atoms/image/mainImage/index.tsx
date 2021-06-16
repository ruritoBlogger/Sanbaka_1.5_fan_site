import styles from "./index.module.scss";

interface Props {
  path: string;
}

/**
 * 画面に大きく表示する画像のコンポーネント
 * 複数枚画像が重なっている用な表現をしている
 * @param {string} path: 表示したい画像のパス
 */

const MainImage: React.FC<Props> = ({ path }) => (
  <div className={styles.wrapper}>
    <div className={styles.frame}>
      <img className={styles.image} src={path} alt="集合写真" />
    </div>
  </div>
);

export default MainImage;
