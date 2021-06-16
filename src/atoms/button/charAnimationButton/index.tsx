import styles from "./index.module.scss";

export type Colors = "ange" | "lize" | "inui";
interface Props {
  msg: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  theme: Colors;
}

/**
 * キャラのテーマ色を組み合わせたボタン
 * @param {Colors} theme: どのテーマ色を用いるのか
 * @param {string} msg: ボタンのメッセージ
 * @param {(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void} handleClick: ボタンがクリックされた時に発火するイベント
 */
const CharAnimationButton: React.FC<Props> = ({ theme, handleClick, msg }) => (
  <button
    type="button"
    className={styles.button}
    onClick={handleClick}
    data-kind={theme}
  >
    <p>{msg}</p>
  </button>
);

export default CharAnimationButton;
