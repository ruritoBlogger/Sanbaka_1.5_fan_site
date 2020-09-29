import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import styles from './site.module.scss';
import Header from '../components/header'
import Footer from '../components/footer';

const Site = () => {

  return (
    <>
      <Header />
      <Scrollbars autoHeight autoHeightMin={975}>
        <div className={styles.root}>
          <div className={styles.block}>
            <h3 className={styles.subtitle}>使用させていただいたサイト</h3>
            <p className={styles.content}>
              配信情報など:
              <a className={styles.link} href="https://wikiwiki.jp/nijisanji/">にじさんじ非公式wiki</a>
            </p>
            <p className={styles.content}>
              立ち絵:
              <a className={styles.link} href="https://nijisanji.ichikara.co.jp/member/">にじさんじ公式サイト</a>
            </p>
            <p className={styles.content}>
              イメージカラー:
              <a className={styles.link} href="https://www.itsukaralink.jp/livers">いつから.link</a>
            </p>
          </div>
        </div>
        <Footer />
      </Scrollbars>
    </>
  )
};

export default Site;

