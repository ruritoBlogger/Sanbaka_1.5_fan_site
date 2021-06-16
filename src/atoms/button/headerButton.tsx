import styles from "./headerButton.module.scss";

interface Props {
  msg: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * headerに表示するボタン
 * @param {string} msg: ボタンのメッセージ
 * @param {(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void} handleClick: ボタンがクリックされた時に発火するイベント
 */
const HeaderButton: React.FC<Props> = ({ msg, handleClick }) => (
  <button type="button" className={styles.button} onClick={handleClick}>
    {msg}
  </button>
);

export default HeaderButton;
