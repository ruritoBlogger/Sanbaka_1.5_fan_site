import styles from "./index.module.scss";

interface Props {
  imgLink: string;
  url: string;
}

/**
 * icon(Twitterなど)を表示するボタン
 * クリックされるとurlに遷移する
 * @param {string} imgLink アイコンが保存されているパス
 * TODO: url用の型を用意しておく
 * @param {string} url クリックれた際に遷移する先
 */
const IconButton: React.FC<Props> = ({ imgLink, url }) => (
  <a type="button" className={styles.button} href={url}>
    <img className={styles.circle} src={imgLink} alt="Avatar" />
  </a>
);

export default IconButton;
