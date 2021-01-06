import styles from './iconButton.module.scss';

interface Props {
  /** アイコンが保存されているパス */
  link: string;
  /** ボタンがクリックされた時に呼び出す関数 */
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * icon(Twitterなど)を表示するボタン
 */
const IconButton: React.VFC<Props> = ({ link, handleClick }) => (
  <button type="button" className={styles.button} onClick={handleClick}>
    <img className={styles.circle} src={link} alt="Avatar" />
  </button>
);

export default IconButton;
