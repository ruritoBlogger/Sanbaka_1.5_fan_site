import styles from './moveButton.module.scss';

interface Props {
  /** ボタンがクリックされた時に呼び出す関数 */
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/*
 * スクロールする画面の一番上に戻るボタン
 */
const MoveButton: React.VFC<Props> = ({handleClick}) => (
  <button type="button" className={styles.button} onClick={handleClick}>
    top
  </button>
);

export default MoveButton;
