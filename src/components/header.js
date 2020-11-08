import React from 'react';
import { useHistory } from 'react-router-dom';
import Headroom from 'react-headroom';
import HeaderButton from './parts/header_button';
import MoveButton from './parts/move_button';
import styles from './header.module.scss';
import Dialog from './dialog';

const Header = () => {
  const history = useHistory();

  const MoveTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const MoveMemberPage = () => {
    window.scrollTo({ top: 0 });
    history.push('/member');
  };

  const MoveRoadPage = () => {
    window.scrollTo({ top: 0 });
    history.push('/road');
  };

  const MoveSitePage = () => {
    window.scrollTo({ top: 0 });
    history.push('/site');
  };

  const MoveHomePage = () => {
    window.scrollTo({ top: 0 });
    history.push('/');
  };

  return (
    <>
      <div className={styles.root} id="scroll">
        <Headroom>
          <div className={`${styles.content} ${styles.pcOnly}`}>
            <HeaderButton handleClick={() => MoveHomePage()} msg="トップページ" />
            <HeaderButton handleClick={() => MoveMemberPage()} msg="さんばかとは" />
            <HeaderButton handleClick={() => MoveRoadPage()} msg="1.5周年までの道のり" />
            <HeaderButton handleClick={() => MoveSitePage()} msg="このサイトについて" />
          </div>
          <div className={`${styles.content} ${styles.smartphoneOnly}`}>
            <Dialog />
          </div>
        </Headroom>
      </div>
    </>
  );
};

export default Header;
