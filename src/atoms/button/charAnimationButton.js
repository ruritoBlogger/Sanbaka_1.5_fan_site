import React, { useState, useEffect } from 'react';
import styles from './charAnimationButton.module.scss';

/**
 * キャラのテーマ色を組み合わせたボタン
 * @param {string} props.theme どのテーマ色を用いるのか(['ange', 'lize', 'inui'])
 * @param {function} props.handleClick クリックされた時に発火させる関数
 * @param {string} props.msg ボタンのメッセージ
 */

const CharAnimationButton = (props) => {
  const [style, setStyle] = useState();

  /**
   * コンポーネントが描画されるタイミングでテーマ色を決定する
   */
  useEffect(() => {
    if (props.theme == 'ange') {
      setStyle(`${styles.color_ange} ${styles.button}`);
    } else if (props.theme == 'lize') {
      setStyle(`${styles.color_lize} ${styles.button}`);
    } else {
      setStyle(`${styles.color_inui} ${styles.button}`);
    }
  }, []);

  return (
    <>
      <button type="button" className={style} onClick={props.handleClick}>
        <p>{props.msg}</p>
      </button>
    </>
  );
};

export default CharAnimationButton;
