import React, { useState } from 'react';
import styles from './lurchThumbnail.module.scss';

interface Props {
  // 表示したい画像のyoutubeID
  youtubeID: string;
  // 右に傾けるかどうか
  isSlantRight: boolean;
}

/**
 * youtubeのサムネイルを傾けて表示するコンポーネント
 * スマホ版で表示する際は傾けない
 */
const LurchThumbnail: React.VFC<Props> = ({youtubeID, isSlantRight}) => {
  const [frame, setFrame] = useState(isSlantRight ? styles.frame_right : styles.frame);

  return (
    <div className={frame}>
      <img className={styles.image} src={`https://i.ytimg.com/vi/${youtubeID}/hqdefault.jpg`} />
    </div>
  );
};

export default LurchThumbnail;
