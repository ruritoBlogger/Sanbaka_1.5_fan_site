import React from 'react';
import styles from './phone.module.scss';

const Phone = () => {
  return (
    <>
      <div className={styles.root}>
        このサイトはpcのみに対応しています.<br/>
        大変申し訳無いのですが, pcからアクセスしていただけると助かります.<br/>
        test
      </div>
    </>
  )
}

export default Phone;