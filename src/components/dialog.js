import React, {useRef, useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import styles from './dialog.module.scss';
import Menu from '@material-ui/icons/Menu';
import HeaderButton from './parts/header_button';

const Dialog = () => {
  const ref = useRef(null);
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

  const showModal = useCallback(() => {
    if( ref.current ) {
      ref.current.showModal();
    }
  }, []);

  const closeModal = useCallback(() => {
    if( ref.current ) {
      ref.current.close();
    }
  }, []);

  return (
    <>
      <div className={styles.disable_dialog}>
        <button className={styles.icon_button} onClick={showModal} >
          <Menu />
        </button>
      </div>
      <dialog ref={ref} className={styles.root}>
        <button className={styles.icon_button} onClick={closeModal} >
          <Menu />
        </button>
        <HeaderButton handleClick={ () => MoveHomePage()} msg="トップページ" />
        <HeaderButton handleClick={ () => MoveMemberPage()} msg="さんばかとは" />
        <HeaderButton handleClick={ () => MoveRoadPage()} msg="1.5周年までの道のり" />
        <HeaderButton handleClick={() => MoveSitePage()} msg="このサイトについて" />
      </dialog>
    </>
  )
}

export default Dialog;