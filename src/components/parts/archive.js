import React from 'react';
import styles from './archive.module.scss';

const Archive = (props) => {

  return (
    <>
      {(() => {
        if( props.right ) {
          return (
            <div className={styles.archive}>
              <div className={styles.video_img}>
                <p>test</p>
              </div>
              <div className={styles.content}>
                <p>アーカイブとか</p>
              </div>
            </div>
          )
        } else {
          return (
            <div className={styles.archive}>
              <div className={styles.content}>
                <p>アーカイブとか</p>
              </div>
              <div className={styles.video_img}>
                <p>test</p>
              </div>
            </div>
          )
        }
      })()}
    </>
  )
};

export default Archive;
