import React from 'react';
import { useHistory } from 'react-router-dom';
import HeaderButton from './parts/header_button';
import MoveButton from './parts/move_button';
import Headroom from 'react-headroom';
import styles from './header.module.scss';
import { isMobile } from 'react-device-detect';
import Menu from '@material-ui/icons/Menu';

const Header = () => {
  const history = useHistory();

  const MoveTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  const MoveMemberPage = () => {
    window.scrollTo({top: 0});
    history.push("/member");
  }

  const MoveRoadPage = () => {
    window.scrollTo({top: 0});
    history.push("/road");
  }

  const MoveSitePage = () => {
    window.scrollTo({top: 0});
    history.push("/site");
  }

  const MoveHomePage = () => {
    window.scrollTo({top: 0});
    history.push("/");
  }

  return (
    <>
      <div className={styles.root} id="scroll" >
        <Headroom>
          {(() => {
            if( !isMobile ) {
              return (
                <div className={styles.content}>
                  <HeaderButton handleClick={ () => MoveHomePage()} msg="トップページ" />
                  <HeaderButton handleClick={ () => MoveMemberPage()} msg="さんばかとは" />
                  <HeaderButton handleClick={ () => MoveRoadPage()} msg="1.5周年までの道のり" />
                  <HeaderButton handleClick={() => MoveSitePage()} msg="このサイトについて" />
                </div>
              )
            } else {
              return (
                <div className={styles.content}>
                  <Menu />
                </div>
              )
            }
          })()}
        </Headroom>
      </div>
    </>
  )
};

export default Header;
