import React, {useRef, useCallback} from 'react';
import styles from './dialog.module.scss';
import Menu from '@material-ui/icons/Menu';

const Dialog = () => {
  const ref = useRef(null);

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
        <p>dialog</p>
        <button onClick={closeModal} >
          close
        </button>
      </dialog>
    </>
  )
}

export default Dialog;