import React from 'react';
import styles from './mainImage.module.scss';

/**
 * 画面に大きく表示する画像のコンポーネント
 * 複数枚画像が重なっている用な表現をしている
 * @param {string} props.path 表示したい画像のパス
 * ex: '/image/sanbaka.png'
 */

const MainImage = (props) => (
  <div className={styles.wrapper}>
    <div className={styles.frame}>
      <img className={styles.image} src={`${window.location.origin}${props.path}`} />
    </div>
  </div>
);

export default MainImage;
