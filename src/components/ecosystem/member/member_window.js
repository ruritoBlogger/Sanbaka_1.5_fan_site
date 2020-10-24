import React from 'react';
import { useHistory } from 'react-router-dom';

import AnimationButton from '../../atoms/animationButton';
import ScrollNavigator from '../../atoms/scrollNavigator';
import MainImage from '../../atoms/mainImage';
import styles from '../window_layout.module.scss';

const MemberWindow = (props) => {
  const history = useHistory();

  const MoveMemberPage = () => {
    window.scrollTo({top: 0});
    history.push("/member");
  }

  return (
    <>
        {(() => {
          if( props.isRight ) {
            return (
              <div className={styles.ly_center} >
                <div className={`${styles.bl_window} ${styles.bl_memberWindow}`} >
                  <MainImage path={'/image/sanbaka.png'} />
                  <div className={styles.paddingLeft}>
                    <div>
                      <h2 className={styles.bl_window_title}>さんばかとは</h2>
                      <p className={styles.bl_window_content}>サンバカーニバルの略であり,<br/> 以下の３人によって結成されたユニット.</p>
                      <p className={`${styles.bl_window_content} ${styles.font_ange}`}><br/>アンジュ・カトリーナ</p>
                      <p className={`${styles.bl_window_content} ${styles.font_lize}`}>リゼ・ヘルエスタ</p>
                      <p className={`${styles.bl_window_content} ${styles.font_inui}`}>戌亥とこ</p>
                    </div>
                    <div className={`${styles.centerComponent} ${styles.marginTop}`}>
                      <AnimationButton handleClick={ () => MoveMemberPage()} msg="もっと詳しく" />
                    </div>
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div className={styles.ly_center} >
                <div className={`${styles.bl_window} ${styles.bl_memberWindow}`} >
                  <div className={styles.paddingRight}>
                    <h2 className={styles.bl_window_title}>さんばかとは</h2>
                    <p className={styles.bl_window_content}>サンバカーニバルの略であり,<br/> 以下の３人によって結成されたユニット.</p>
                    <p className={`${styles.bl_window_content} ${styles.font_ange}`}><br/>アンジュ・カトリーナ</p>
                    <p className={`${styles.bl_window_content} ${styles.font_lize}`}>リゼ・ヘルエスタ</p>
                    <p className={`${styles.bl_window_content} ${styles.font_inui}`}>戌亥とこ</p>
                    <p className={styles.bl_window_content}><br/>３人のバカという意味ではないとのこと.</p>
                  </div>
                  <MainImage path={'/image/sanbaka.png'} />
                </div>
                <div className={styles.ly_center}>
                  <ScrollNavigator msg="Scroll" />
                </div>
              </div>
            )
          }
        })()}
    </>
  );
};

export default MemberWindow;