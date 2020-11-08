import React from 'react';
// import './button.scss';
import styles from './headerButton.module.scss';

const HeaderButton = (props) => (
  <>
    <button type="button" className={styles.button} onClick={props.handleClick}>
      {props.msg}
    </button>
  </>
);

export default HeaderButton;