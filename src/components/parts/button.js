import React from 'react';
// import './button.scss';
import styles from './button.module.scss';

const Button = (props) => {

  return (
    <>
      <button className={styles.button} onClick={props.handleClick}>
        {props.msg}
      </button>
    </>
  )
};

export default Button;

