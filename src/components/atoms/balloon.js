import React from 'react';
import styles from './balloon.module.scss';

/**
 * 吹き出しを表示するコンポーネント
 * @param {string} props.msg 吹き出しに挿入する文字
 */
const Balloon = (props) => {
  return (
    <>
      <div className={styles.balloon}>
        <p className={styles.char_msg}>{props.msg}</p>
      </div>
    </>
  )
}

export default Balloon