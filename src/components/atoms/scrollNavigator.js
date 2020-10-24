import React from 'react';
import styles from './scrollNavigator.module.scss';

/**
 * スクロールを促すUIのコンポーネント
 * pc版でのみ表示させる
 * @param {string} props.msg スクロールを促すメッセージ
 */

const scrollNavigator = (props) => {
  return (
    <a className={styles.scroll} href="#">{props.msg}</a>
  )
}