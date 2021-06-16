import React from "react";
import styles from "./animationButton.module.scss";

interface Props {
  msg: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * カーソルを合わせるとアニメーションが発火するボタン
 * @param {string} msg: ボタンの文字
 * @param {(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void} handleClick: ボタンがクリックされた時に発火するイベント
 */
const AnimationButton: React.FC<Props> = ({ msg, handleClick }) => (
  <button type="button" className={styles.button} onClick={handleClick}>
    {msg}
  </button>
);

export default AnimationButton;
