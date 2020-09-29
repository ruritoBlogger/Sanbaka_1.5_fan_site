import React from 'react';
import styles from './phone.module.scss';

const Phone = () => {
  return (
    <>
      <div className={styles.root}>
        <h3 className={`${styles.title} ${styles.center}`}>お願い</h3>
        <div className={styles.frame}>
          <img className={styles.img} src={`${window.location.origin}/image/sanbaka.png`} />
        </div>
        <p className={styles.content}>
          本サイトはpcからのアクセスのみに対応しています.<br/>
          大変申し訳無いのですが, pcからアクセスしていただけると助かります.<br/>
          本サイトにアクセスしていただきありがとうございます.
        </p>
      </div>
    </>
  )
}

export default Phone;