import styles from './largeThumbnail.module.scss';

interface Props {
  // 表示したい画像のyoutubeID
  youtubeID: string
}

// TODO: pc版の画面サイズによってはUIが崩れるので修正する

/**
 * youtubeのサムネイルを大きく表示するコンポーネント
 */
const LargeThumbnail: React.VFC<Props> = ({youtubeID}) => (
  <div className={styles.frame}>
    <img className={styles.image} src={`https://i.ytimg.com/vi/${youtubeID}/hqdefault.jpg`} />
  </div>
);

export default LargeThumbnail;
