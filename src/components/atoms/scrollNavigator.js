import React, { useState } from 'react';
import styles from './scrollNavigator.module.scss';

/**
 * スクロールを促すUIのコンポーネント
 * @param {string} props.msg スクロールを促すメッセージ
 * @param {bool} props.isOnlyPC pcのみで表示させるかどうか
 */

const ScrollNavigator = (props) => {
  const [style, setStyle] = useState(props.isOnlyPC ? styles.scroll_pcOnly : styles.scroll)
  return (
    <a className={style} href="#">{props.msg}</a>
  )
}

export default ScrollNavigator;