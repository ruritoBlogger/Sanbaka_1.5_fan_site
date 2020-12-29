import React, { useRef, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Menu from '@material-ui/icons/Menu';
import styles from './dialog.module.scss';
import HeaderButton from './parts/headerButton';

const Dialog = () => {
  const ref = useRef(null);
  const history = useHistory();
  const [dialogState, setDialogState] = useState(`${styles.root} ${styles.hide}`)

  const MoveTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const MoveMemberPage = () => {
    window.scrollTo({ top: 0 });
    closeModal();
    history.push('/member');
  };

  const MoveRoadPage = () => {
    window.scrollTo({ top: 0 });
    closeModal();
    history.push('/road');
  };

  const MoveSitePage = () => {
    window.scrollTo({ top: 0 });
    closeModal();
    history.push('/site');
  };

  const MoveHomePage = () => {
    window.scrollTo({ top: 0 });
    closeModal();
    history.push('/');
  };

  const showModal = useCallback(() => {
    if (ref.current) {
      console.log(ref.current)
      setDialogState(styles.root)
      document.addEventListener('mousewheel', scrollControl, { passive: false });
      document.addEventListener('touchmove', scrollControl, { passive: false });
    }
  }, []);

  const closeModal = useCallback(() => {
    if (ref.current) {
      setDialogState(`${styles.root} ${styles.hide}`)
      document.removeEventListener('mousewheel', scrollControl, { passive: false });
      document.removeEventListener('touchmove', scrollControl, { passive: false });
    }
  }, []);

  const scrollControl = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.header}>
        <button type="button" className={`${styles.icon_button} ${styles.default_color}`} onClick={showModal}>
          <Menu />
        </button>
      </div>

      <div ref={ref} className={dialogState}>
        <div className={styles.header}>
          <button type="button" className={`${styles.icon_button} ${styles.white}`} onClick={closeModal}>
            <Menu />
          </button>
        </div>

        <div className={styles.flex_column}>
          <HeaderButton handleClick={() => MoveHomePage()} msg="トップページ" />
          <HeaderButton handleClick={() => MoveMemberPage()} msg="さんばかとは" />
          <HeaderButton handleClick={() => MoveRoadPage()} msg="1.5周年までの道のり" />
          <HeaderButton handleClick={() => MoveSitePage()} msg="このサイトについて" />
        </div>
      </div>
    </>
  );
};

export default Dialog;
