import React from 'react';
import styles from './archive.module.scss';

const Button = (props) => {
  return (
    <>
      <button className={styles.button} onClick={props.handleClick}>
        <p className={`${styles.button_text} ${props.color}`}>{props.msg}</p>
      </button>
    </>
  )
}

/**
 * アーカイブコンポーネント
 * @param {string} props.id - youtubeのID
 * @param {string} props.title - 説明部分のタイトル
 * @param {string} props.text - 説明部分
 * @param {Array} props.data - 各動画情報[アンジュ・リゼ・戌亥]
 * @param {Object} props.dataの各要素 - {time: number, key: string}
 */
const Archive = (props) => {

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
                  <p className={styles.text}>{props.text}</p>
                  <div className={`${styles.buttons} ${styles.flex_row}`} >
                    <Button handleClick={() => MovePage(props.data[0])} msg="アンジュ視点" color={styles.color_ange} className={`${styles.text}`} />
                    <Button handleClick={() => MovePage(props.data[1])} msg="リゼ視点" color={styles.color_lize} className={`${styles.text}`} />
                    <Button handleClick={() => MovePage(props.data[2])} msg="戌亥視点" color={styles.color_inui} className={`${styles.text}`} />
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
                  <p className={styles.text}>{props.text}</p>
                  <div className={`${styles.buttons} ${styles.flex_row}`} >
                    <Button handleClick={() => MovePage(props.data[0])} msg="アンジュ視点" color={styles.color_ange} className={`${styles.text}`} />
                    <Button handleClick={() => MovePage(props.data[1])} msg="リゼ視点" color={styles.color_lize} className={`${styles.text}`} />
                    <Button handleClick={() => MovePage(props.data[2])} msg="戌亥視点" color={styles.color_inui} className={`${styles.text}`} />
                  </div>
                </div>
              </div>
              <div className={styles.frame}>
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
