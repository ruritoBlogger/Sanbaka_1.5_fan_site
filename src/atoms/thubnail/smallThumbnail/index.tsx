import styles from "./index.module.scss";

interface Props {
  youtubeID: string;
}

// TODO: pc版の画面サイズによってはUIが崩れるので修正する

/**
 * youtubeのサムネイルを小さく表示するコンポーネント
 * @param {string} youtubeID: 表示したい画像のyoutubeID
 */
const SmallThumbnail: React.FC<Props> = ({ youtubeID }) => (
  <img
    className={styles.image}
    src={`https://i.ytimg.com/vi/${youtubeID}/mqdefault.jpg`}
    alt="youtubeのサムネイル"
  />
);

export default SmallThumbnail;
