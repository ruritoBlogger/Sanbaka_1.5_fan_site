import React from 'react';
import styles from './largeThumbnail.module.scss';

/**
 * youtubeのサムネイルを大きく表示するコンポーネント
 * @param {string} props.youtubeID 表示したい画像のyoutubeID
 */

// FIXME: スマホによってはUIが崩れる

const LargeThumbnail = (props) => (
  <div className={styles.frame}>
    <img className={styles.image} src={`https://i.ytimg.com/vi/${props.youtubeID}/hqdefault.jpg`} />
  </div>
);

export default LargeThumbnail;
