import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../parts/button';
import styles from '../window_layout.module.scss';

const MemberWindow = (props) => {
  const history = useHistory();

  const MoveMemberPage = () => {
    window.scrollTo({top: 0});
    history.push("/member");
  }

  return (
    <>
      <div className={styles.root} >
        {(() => {
          if( props.isRight ) {
            return (
              <div className={`${styles.main} ${styles.dynamic_flex}`} >
                <div className={styles.frame}>
                  <img className={styles.img} src={`${window.location.origin}/image/sanbaka.png`} />
                </div>
                <div className={styles.left_padding}>
                  <div>
                    <h2 className={`${styles.title} ${styles.center}`}>さんばかとは</h2>
                    <p className={`${styles.content} ${styles.center}`}>サンバカーニバルの略であり,<br/> 以下の３人によって結成されたユニット.</p>
                    <p className={`${styles.content} ${styles.center} ${styles.font_ange}`}><br/>アンジュ・カトリーナ</p>
                    <p className={`${styles.content} ${styles.center} ${styles.font_lize}`}>リゼ・ヘルエスタ</p>
                    <p className={`${styles.content} ${styles.center} ${styles.font_inui}`}>戌亥とこ</p>
                  </div>
                  <div className={styles.center_component}>
                    <Button handleClick={ () => MoveMemberPage()} msg="もっと詳しく" />
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div className={`${styles.main} ${styles.flex}`} >
                <div className={styles.right_padding}>
                  <h2 className={`${styles.title} ${styles.center}`}>さんばかとは</h2>
                  <p className={`${styles.content} ${styles.center}`}>サンバカーニバルの略であり,<br/> 以下の３人によって結成されたユニット.</p>
                  <p className={`${styles.content} ${styles.center} ${styles.font_ange}`}><br/>アンジュ・カトリーナ</p>
                  <p className={`${styles.content} ${styles.center} ${styles.font_lize}`}>リゼ・ヘルエスタ</p>
                  <p className={`${styles.content} ${styles.center} ${styles.font_inui}`}>戌亥とこ</p>
                  <p className={`${styles.content} ${styles.center}`}><br/>３人のバカという意味ではないとのこと.</p>
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
      <div className={styles.center}>
        <a className={styles.scroll} href="#">Scroll</a>
      </div>
    </>
  );
};

export default MemberWindow;