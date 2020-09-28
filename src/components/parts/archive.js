import React from 'react';
import styles from './archive.module.scss';

/**
 * アーカイブコンポーネント
 * @param {string} props.youtubeID - youtubeのID
 * @param {string} props.title - 説明部分のタイトル
 * @param {string} props.text - 説明部分
 * @param {Array} props.times - 各再生時間[アンジュ・リゼ・戌亥]
 */
const Archive = (props) => {

  return (
    <>
      {(() => {
        if( props.right ) {
          return (
            <div className={styles.archive}>
              <div className={styles.frame}>
                <img className={styles.img} src={`https://i.ytimg.com/vi/${props.data}/hqdefault.jpg`} />
              </div>
              <div className={styles.content}>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.text}>{props.text}</p>
                <p className={`${styles.text} ${styles.color_ange}`}>アンジュ視点</p>
                <p className={`${styles.text} ${styles.color_lize}`}>リゼ視点</p>
                <p className={`${styles.text} ${styles.color_inui}`}>戌亥視点</p>
              </div>
            </div>
          )
        } else {
          return (
            <div className={styles.archive}>
              <div className={styles.content}>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.text}>{props.text}</p>
                <p className={`${styles.text} ${styles.color_ange}`}>アンジュ視点</p>
                <p className={`${styles.text} ${styles.color_lize}`}>リゼ視点</p>
                <p className={`${styles.text} ${styles.color_inui}`}>戌亥視点</p>
              </div>
              <div className={styles.frame}>
                <img className={styles.img} src={`https://i.ytimg.com/vi/${props.data}/hqdefault.jpg`} />
              </div>
            </div>
          )
        }
      })()}
    </>
  )
};

export default Archive;
