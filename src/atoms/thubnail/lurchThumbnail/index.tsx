import styles from "./index.module.scss";

interface Props {
  youtubeID: string;
  isSlantRight: boolean;
}

/**
 * youtubeのサムネイルを傾けて表示するコンポーネント
 * スマホ版で表示する際は傾けない
 * @param {string} youtubeID: 表示したい画像のyoutubeID
 * @param {boolean} isSlantRight: 右に傾けるかどうか
 */
const LurchThumbnail: React.FC<Props> = ({ youtubeID, isSlantRight }) => {
  const frame = isSlantRight ? styles.frame_right : styles.frame;

  return (
    <div className={frame}>
      <img
        className={styles.image}
        src={`https://i.ytimg.com/vi/${youtubeID}/hqdefault.jpg`}
        alt="youtubeのサムネイル"
      />
    </div>
  );
};

export default LurchThumbnail;
