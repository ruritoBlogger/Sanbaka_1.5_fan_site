import React from 'react';
import styles from './animationButton.module.scss';

/**
 * カーソルを合わせるとアニメーションが発火するボタン
 * @param {string} props.msg ボタンの文字
 * @param {function} props.handleClick ボタンがクリックされた時に呼び出す関数
 */

// TODO: スマホ版でのボタンのサイズなどを調整する

const AnimationButton = (props) => {
  return (
    <button className={styles.button} onClick={props.handleClick}>
      {props.msg}
    </button>
  )
};

export default AnimationButton;

