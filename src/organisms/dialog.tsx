import { useRef, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Menu from '@material-ui/icons/Menu';
import styles from './dialog.module.scss';
import HeaderButton from '../atoms/button/headerButton';

const Dialog: React.VFC = () => {
  const ref = useRef(null);
  const history = useHistory();
  const [dialogState, setDialogState] = useState(`${styles.root} ${styles.hide}`);

  const scrollControl = (e: Event) => {
    e.preventDefault();
  };

  /**
   * ダイアログを表示する
   * ダイアログを表示している間はスクロールを制限する
   */
  const showModal = useCallback(() => {
    if (ref.current) {
      setDialogState(styles.root);
      document.addEventListener('mousewheel', scrollControl, { passive: false });
      document.addEventListener('touchmove', scrollControl, { passive: false });
    }
  }, []);

  /**
   * ダイアログを閉じる
   */
  const closeModal = useCallback(() => {
    if (ref.current) {
      setDialogState(`${styles.root} ${styles.hide}`);
      document.removeEventListener('mousewheel', scrollControl);
      document.removeEventListener('touchmove', scrollControl);
    }
  }, []);

  /**
   * メンバー紹介ページに遷移する
   * 遷移する前にダイアログを閉じておく
   * また画面上に遷移しておく
   */
  const MoveMemberPage = () => {
    window.scrollTo({ top: 0 });
    closeModal();
    history.push('/member');
  };

  /**
   * 1.5周年までの道のりページに遷移する
   * 遷移する前にダイアログを閉じておく
   * また画面上に遷移しておく
   */
  const MoveRoadPage = () => {
    window.scrollTo({ top: 0 });
    closeModal();
    history.push('/road');
  };

  /**
   * このサイトの紹介に遷移する
   * 遷移する前にダイアログを閉じておく
   * また画面上に遷移しておく
   */
  const MoveSitePage = () => {
    window.scrollTo({ top: 0 });
    closeModal();
    history.push('/site');
  };

  /**
   * トップページに遷移する
   * 遷移する前にダイアログを閉じておく
   * また画面上に遷移しておく
   */
  const MoveHomePage = () => {
    window.scrollTo({ top: 0 });
    closeModal();
    history.push('/');
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
