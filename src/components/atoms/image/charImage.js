import React from 'react';
import styles from './charImage.module.scss';

/**
 * 各キャラの画像のコンポーネント
 * 画面の半分ほどの大きさで表示する
 * @param {string} props.path 表示したい画像のパス
 * ex: '/image/sanbaka.png'
 */

const CharImage = (props) => {
  return (
    <div className={styles.wrapper} >
      <div className={styles.frame} >
        <img className={styles.image} src={`${window.location.origin}` + props.path} />
      </div>
    </div>
  )
}

export default CharImage;
