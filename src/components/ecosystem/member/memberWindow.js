import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import AnimationButton from '../../atoms/button/animationButton';
import ScrollNavigator from '../../atoms/scrollNavigator';
import MainImage from '../../atoms/image/mainImage';
import styles from '../window_layout.module.scss';

const MemberWindow = (props) => {
  const history = useHistory();
  const [padding, setPadding] = useState(props.isRight ? `${styles.bl_window_smallBlock} ${styles.paddingLeft_pcOnly}` : `${styles.bl_window_smallBlock} ${styles.paddingRight_pcOnly}`);
  const [bl_window, setBl_window] = useState(props.isRight ? `${styles.bl_window} ${styles.bl_memberWindow}` : `${styles.bl_window} ${styles.bl_memberWindow} ${styles.flex_row_reverse}`);

  const MoveMemberPage = () => {
    window.scrollTo({ top: 0 });
    history.push('/member');
  };

  return (
    <>
      <div className={styles.ly_center}>
        <div className={bl_window}>
          <MainImage path="/image/sanbaka.png" />
          <div className={padding}>
            <div>
              <h2 className={styles.bl_memberWindow_title}>さんばかとは</h2>
              {/* HACK: CSSの部分でカラーコードを共通化する */}
              <p className={styles.bl_memberWindow_content}>
                サンバカーニバルの略であり,
                <br />
                {' '}
                以下の３人によって結成されたユニット.
              </p>
              <p className={`${styles.bl_memberWindow_content} ${styles.font_ange}`}>
                <br />
                アンジュ・カトリーナ
              </p>
              <p className={`${styles.bl_memberWindow_content} ${styles.font_lize}`}>リゼ・ヘルエスタ</p>
              <p className={`${styles.bl_memberWindow_content} ${styles.font_inui}`}>戌亥とこ</p>
            </div>
            {(() => {
              if (props.isRight) {
                return (
                  <div className={`${styles.centerComponent} ${styles.marginTop}`}>
                    <AnimationButton handleClick={() => MoveMemberPage()} msg="もっと詳しく" />
                  </div>
                );
              }
            })()}
          </div>
        </div>
        {/* HACK: 呼び出し元の引数名を改良する */}
        {(() => {
          if (!props.isRight) {
            return (
              <ScrollNavigator msg="Scroll" isOnlyPC={false} />
            );
          }
        })()}
      </div>
    </>
  );
};

export default MemberWindow;
