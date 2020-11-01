import React, {useState} from 'react';
import styles from './lurchThumbnail.module.scss';

/**
 * youtubeのサムネイルを傾けて表示するコンポーネント
 * スマホ版で表示する際は傾けない
 * @param {string} props.youtubeID 表示したい画像のyoutubeID
 * @param {bool} props.isSlantRight 右に傾けるかどうか
 */

const LurchThumbnail = (props) => {
  const [frame, setFrame] = useState(props.isSlantRight ? styles.frame_right : styles.frame);
  return (
      <div className={frame} >
        <img className={styles.image} src={"https://i.ytimg.com/vi/" + props.youtubeID + "/hqdefault.jpg"} />
      </div>
  )
}

export default LurchThumbnail;