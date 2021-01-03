import styles from './charImage.module.scss';

interface Props {
  // 表示したい画像のパス
  path: string;
}

/**
 * 各キャラの画像のコンポーネント
 */

const CharImage: React.VFC<Props> = path => (
  <div className={styles.wrapper}>
    <div className={styles.frame}>
      <img className={styles.image} src={`${window.location.origin}${path}`} />
    </div>
  </div>
);

export default CharImage;
