import React from 'react';
import styles from './member_window.module.scss'

const MemberWindow = () => {

  return (
    <>
      <div className={styles.root}>
        <div className={styles.main} >
          <h2 className={styles.title}>メンバー紹介 <br/>(非公式)ファンサイト</h2>
          <p className={styles.content}>さんばかの皆さんがデビューしてから<br />1.5周年をお祝いする非公式ファンサイト</p>
        </div>
      </div>
    </>
  );
};

export default MemberWindow;