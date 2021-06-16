import styles from './mainImage.module.scss';

interface Props {
  // 表示したい画像のパス
  path: string;
}

/**
 * 画面に大きく表示する画像のコンポーネント
 * 複数枚画像が重なっている用な表現をしている
 */

const MainImage: React.VFC<Props> = ({ path }) => (
  <div className={styles.wrapper}>
    <div className={styles.frame}>
      <img className={styles.image} src={`${window.location.origin}${path}`} alt="集合写真" />
    </div>
  </div>
);

export default MainImage;
