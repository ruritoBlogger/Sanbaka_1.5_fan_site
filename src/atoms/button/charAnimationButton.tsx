import styles from "./charAnimationButton.module.scss";

interface Props {
  // ボタンのメッセージ
  msg: string;
  // ボタンがクリックされた時に呼び出す関数
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  // どのテーマ色を用いるのか
  theme: "ange" | "lize" | "inui";
}

/**
 * キャラのテーマ色を組み合わせたボタン
 */
const CharAnimationButton: React.VFC<Props> = ({ theme, handleClick, msg }) => {
  let color;

  switch (theme) {
    case "ange":
      color = styles.color_ange;
      break;
    case "lize":
      color = styles.color_lize;
      break;
    case "inui":
      color = styles.color_inui;
      break;
  }

  const style = `${color} ${styles.button}`;

  return (
    <button type="button" className={style} onClick={handleClick}>
      <p>{msg}</p>
    </button>
  );
};

export default CharAnimationButton;
