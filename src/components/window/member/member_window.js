import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../parts/button';
import styles from '../window_layout.module.scss';

const MemberWindow = (props) => {
  const history = useHistory();

  const MoveMemberPage = () => {
    history.push("/member");
  }

  return (
    <>
      <div className={styles.root} >
        {(() => {
          if( props.isRight ) {
            return (
              <div className={`${styles.main} ${styles.flex}`} >
                <div className={styles.frame}>
                  <img className={styles.img} src={`${window.location.origin}/image/sanbaka.png`} />
                </div>
                <div className={styles.left_padding}>
                  <h2 className={`${styles.title} ${styles.right}`}>メンバー紹介</h2>
                  <p className={`${styles.content} ${styles.right}`}>さんばかを彩る愉快な仲間たち</p>
                  <p className={`${styles.content}`}><br/>- アンジュ・カトリーナ</p>
                  <p className={`${styles.content}`}>- リゼ・ヘルエスタ</p>
                  <p className={`${styles.content}`}>- 戌亥とこ</p>
                  <Button handleClick={ () => MoveMemberPage()} msg="詳細" />
                </div>
              </div>
            )
          } else {
            return (
              <div className={`${styles.main} ${styles.flex}`} >
                <div className={styles.right_padding}>
                  <h2 className={styles.title}>メンバー紹介</h2>
                  <p className={styles.content}>さんばかを彩る愉快な仲間たち</p>
                  <p className={styles.content}>アンジュ・カトリーナ</p>
                  <p className={styles.content}>リゼ・ヘルエスタ</p>
                  <p className={styles.content}>戌亥とこ</p>
                </div>
                <div>
                  <div className={styles.frame}>
                    <img className={styles.img} src={`${window.location.origin}/image/sanbaka.png`} />
                  </div>
                </div>
              </div>
            )
          }
        })()}
      </div>
    </>
  );
};

export default MemberWindow;