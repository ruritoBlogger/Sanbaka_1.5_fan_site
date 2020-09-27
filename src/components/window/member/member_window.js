import React from 'react';
import styles from '../window_layout.module.scss';

const MemberWindow = (props) => {

  return (
    <>
      <div className={styles.root}>
          {(() => {
            if( props.isRight ) {
              return (
                <div className={styles.main} >
                  <h2 className={`${styles.title} ${styles.right}`}>メンバー紹介</h2>
                  <p className={`${styles.content} ${styles.right}`}>いい感じの紹介文が欲しいわね...</p>
                </div>
              )
            } else {
              return (
                <div className={styles.main} >
                  <h2 className={styles.title}>メンバー紹介</h2>
                  <p className={styles.content}>いい感じの紹介文が欲しいわね...</p>
                </div>
              )
            }
          })()}
      </div>
    </>
  );
};

export default MemberWindow;