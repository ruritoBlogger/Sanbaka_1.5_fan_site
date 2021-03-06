import styles from './lurchThumbnail.module.scss';

interface Props {
  // 表示したい画像のyoutubeID
  youtubeID: string;
  // 右に傾けるかどうか
  isSlantRight: boolean;
}

/**
 * youtubeのサムネイルを傾けて表示するコンポーネント
 * スマホ版で表示する際は傾けない
 */
const LurchThumbnail: React.VFC<Props> = ({ youtubeID, isSlantRight }) => {
  const frame = isSlantRight ? styles.frame_right : styles.frame;

  return (
    <div className={frame}>
      <img className={styles.image} src={`https://i.ytimg.com/vi/${youtubeID}/hqdefault.jpg`} alt="youtubeのサムネイル" />
    </div>
  );
};

export default LurchThumbnail;
