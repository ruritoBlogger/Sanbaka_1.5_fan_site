import React from 'react';
import styles from './iconButton.module.scss';

interface Props {
  /** ボタンの文字 */
  msg: string;
  /** アイコンが保存されているパス */
  link: string;
  /** ボタンがクリックされた時に呼び出す関数 */
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const IconButton: React.VFC<Props> = ({msg, link, handleClick}) => (
  <button type="button" className={styles.button} onClick={handleClick}>
    <img className={styles.circle} src={link} alt="Avatar" />
  </button>
);

export default IconButton;
