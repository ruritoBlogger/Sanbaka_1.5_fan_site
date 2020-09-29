import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {

  return (
    <>
      <div className={styles.root}>
        <div className={styles.content} >
          <p className={styles.text}>本サイトは, さんばかの1ファンが個人で作成したものになります. </p>
          <p className={styles.text}>また, 本サイトはいちから株式会社及びにじさんじプロジェクトとは一切関わりはありません.</p>
          <p className={styles.text}>本サイトの不具合報告などは<a href="https://twitter.com/rurito8">こちら</a>のTwitterアカウントまでお願いします.</p>
        </div>
      </div>
    </>
  )
}

export default Footer;