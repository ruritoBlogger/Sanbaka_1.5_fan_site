import React from 'react';
import styles from './smallThumbnail.module.scss';

/**
 * youtubeのサムネイルを小さく表示するコンポーネント
 * @param {string} props.youtubeID 表示したい画像のyoutubeID
 */

const SmallThumbnail = (props) => {
  return (
    <div className={styles.frame} >
      <img className={styles.image} src={"https://i.ytimg.com/vi/" + props.youtubeID + "/hqdefault.jpg"} />
    </div>
  )
}

export default SmallThumbnail;