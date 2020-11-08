import React, { useState } from 'react';
import styles from './archive.module.scss';

import CharAnimationButton from '../atoms/button/charAnimationButton';
import LurchThumbnail from '../atoms/thubnail/lurchThumbnail';

/**
 * アーカイブコンポーネント
 * @param {boolean} props.right - 右側に説明文を置くかどうか
 * @param {string} props.id - youtubeのID
 * @param {string} props.title - 説明部分のタイトル
 * @param {string} props.text - 説明部分
 * @param {string} props.day - 投稿時間の情報
 * @param {Array} props.data - 各動画情報[アンジュ・リゼ・戌亥]
 * @param {Object} props.dataの各要素 - {time: number, key: string}
 */
const Archive = (props) => {
  const MovePage = (data) => {
    window.open(`https://youtu.be/${data.key}?autoplay=0&t=${data.time}`, '_blank');
  };

  const [flexStyle, setFlexStyle] = useState(props.right ? `${styles.archive} ${styles.archive_reverse}` : styles.archive);

  return (
    <>
      <div className={flexStyle}>
        <div className={styles.image_box}>
          <LurchThumbnail youtubeID={props.id} isSlantRight={props.right} />
        </div>
        <div className={styles.content_box}>
          <div className={styles.content}>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={`${styles.text} ${styles.marginBottom}`}>{props.day}</p>
            <p className={styles.text}>{props.text}</p>
            <div className={`${styles.buttons} ${styles.flex_row} ${styles.marginTop}`}>
              <CharAnimationButton handleClick={() => MovePage(props.data[0])} msg="アンジュ視点" theme="ange" className={`${styles.text}`} />
              <CharAnimationButton handleClick={() => MovePage(props.data[1])} msg="リゼ視点" theme="lize" className={`${styles.text}`} />
              <CharAnimationButton handleClick={() => MovePage(props.data[2])} msg="戌亥視点" theme="inui" className={`${styles.text}`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Archive;
