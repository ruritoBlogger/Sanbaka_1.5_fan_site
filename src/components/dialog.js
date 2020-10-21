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
    closeModal();
    history.push("/member");
  }

  const MoveRoadPage = () => {
    window.scrollTo({top: 0});
    closeModal();
    history.push("/road");
  }

  const MoveSitePage = () => {
    window.scrollTo({top: 0});
    closeModal();
    history.push("/site");
  }

  const MoveHomePage = () => {
    window.scrollTo({top: 0});
    closeModal();
    history.push("/");
  }

  const showModal = useCallback(() => {
    if( ref.current ) {
      ref.current.showModal();
      document.addEventListener("mousewheel", scrollControl, { passive: false });
      document.addEventListener("touchmove", scrollControl, { passive: false });
    }
  }, []);

  const closeModal = useCallback(() => {
    if( ref.current ) {
      ref.current.close();
      document.removeEventListener("mousewheel", scrollControl, { passive: false });
      document.removeEventListener("touchmove", scrollControl, { passive: false });
    }
  }, []);

  const scrollControl = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className={styles.header}>
        <button className={`${styles.icon_button} ${styles.default_color}`} onClick={showModal} >
          <Menu />
        </button>
      </div>
      <dialog ref={ref} className={styles.root}>
        <div className={styles.header} >
          <button className={`${styles.icon_button} ${styles.white}`} onClick={closeModal} >
            <Menu />
          </button>
        </div>
        <HeaderButton handleClick={ () => MoveHomePage()} msg="トップページ" />
        <HeaderButton handleClick={ () => MoveMemberPage()} msg="さんばかとは" />
        <HeaderButton handleClick={ () => MoveRoadPage()} msg="1.5周年までの道のり" />
        <HeaderButton handleClick={ () => MoveSitePage()} msg="このサイトについて" />
      </dialog>
    </>
  )
}

export default Dialog;