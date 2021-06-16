import { useState, useEffect } from 'react';
import styles from './charAnimationButton.module.scss';

interface Props {
  // ボタンのメッセージ
  msg: string;
  // ボタンがクリックされた時に呼び出す関数
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  // どのテーマ色を用いるのか
  theme: 'ange' | 'lize' | 'inui';
}

/**
 * キャラのテーマ色を組み合わせたボタン
 */
const CharAnimationButton: React.VFC<Props> = ({ theme, handleClick, msg }) => {
  const [style, setStyle] = useState<string>('');

  /**
   * コンポーネントが描画されるタイミングでテーマ色を決定する
   */
  useEffect(() => {
    const themeClassName = ({
      ange: styles.color_ange,
      lize: styles.color_lize,
      inui: styles.color_inui,
    })[theme];

    setStyle(`${themeClassName} ${styles.button}`);
  }, []);

  return (
    <button type="button" className={style} onClick={handleClick}>
      <p>{msg}</p>
    </button>
  );
};

export default CharAnimationButton;
