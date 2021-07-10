import styles from "./index.module.scss";

interface Props {
  youtubeID: string;
}

// TODO: pc版の画面サイズによってはUIが崩れるので修正する

/**
 * youtubeのサムネイルを大きく表示するコンポーネント
 * @param {string} youtubeID: 表示したい画像のyoutubeID
 */
const LargeThumbnail: React.FC<Props> = ({ youtubeID }) => (
  <img
    className={styles.image}
    src={`https://i.ytimg.com/vi/${youtubeID}/mqdefault.jpg`}
    alt="youtubeのサムネイル"
  />
);

export default LargeThumbnail;
