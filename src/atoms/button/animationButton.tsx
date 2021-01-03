import styles from './animationButton.module.scss';

interface Props {
  /** ボタンの文字 */
  msg: string;
  /** ボタンがクリックされた時に呼び出す関数 */
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * カーソルを合わせるとアニメーションが発火するボタン
 */
const AnimationButton: React.VFC<Props> = ({ msg, handleClick }) => (
  <button type="button" className={styles.button} onClick={handleClick}>
    {msg}
  </button>
);

export default AnimationButton;
