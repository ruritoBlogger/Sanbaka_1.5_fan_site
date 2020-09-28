import React from 'react';
// import './button.scss';
import styles from './header_button.module.scss';

const HeaderButton = (props) => {

  return (
    <>
      <button className={styles.button} onClick={props.handleClick}>
        {props.msg}
      </button>
    </>
  )
};

export default HeaderButton;

