import React from 'react';
import styles from './archive.module.scss';

import charAnimationButton from '../atoms/button/charAnimationButton';
import CharAnimationButton from '../atoms/button/charAnimationButton';


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
    window.open(`https://youtu.be/${data.key}?autoplay=0&t=${data.time}`, "_blank")
  }

  return (
    <>
      {(() => {
        if( props.right ) {
          return (
            <div className={styles.archive}>
              <div className={styles.frame}>
                <img className={styles.img} src={`https://i.ytimg.com/vi/${props.id}/hqdefault.jpg`} />
              </div>
              <div className={styles.content_box}>
                <div className={styles.content}>
                  <h2 className={styles.title}>{props.title}</h2>
                  <p className={`${styles.text} ${styles.margin_bottom}`}>{props.day}</p>
                  <p className={styles.text}>{props.text}</p>
                  <div className={`${styles.buttons} ${styles.flex_row}`} >
                    <CharAnimationButton handleClick={() => MovePage(props.data[0])} msg="アンジュ視点" theme='ange' className={`${styles.text}`} />
                    <CharAnimationButton handleClick={() => MovePage(props.data[1])} msg="リゼ視点" theme='lize' className={`${styles.text}`} />
                    <CharAnimationButton handleClick={() => MovePage(props.data[2])} msg="戌亥視点" theme='inui' className={`${styles.text}`} />
                  </div>
                </div>
              </div>
            </div>
          )
        } else {
          return (
            <div className={styles.archive}>
              <div className={styles.content_box}>
                <div className={styles.content}>
                  <h2 className={styles.title}>{props.title}</h2>
                  <p className={`${styles.text} ${styles.margin_bottom}`}>{props.day}</p>
                  <p className={styles.text}>{props.text}</p>
                  <div className={`${styles.buttons} ${styles.flex_row}`} >
                    <CharAnimationButton handleClick={() => MovePage(props.data[0])} msg="アンジュ視点" theme='ange' className={`${styles.text}`} />
                    <CharAnimationButton handleClick={() => MovePage(props.data[1])} msg="リゼ視点" theme='lize' className={`${styles.text}`} />
                    <CharAnimationButton handleClick={() => MovePage(props.data[2])} msg="戌亥視点" theme='inui' className={`${styles.text}`} />
                  </div>
                </div>
              </div>
              <div className={styles.frame_right}>
                <img className={styles.img} src={`https://i.ytimg.com/vi/${props.id}/hqdefault.jpg`} />
              </div>
            </div>
          )
        }
      })()}
    </>
  )
};

export default Archive;
