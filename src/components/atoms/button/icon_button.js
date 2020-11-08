import React from 'react';
// import './button.scss';
import styles from './icon_button.module.scss';

const IconButton = (props) => (
  <>
    <button type="button" className={styles.button} onClick={props.handleClick}>
      <img className={styles.circle} src={props.link} alt="Avatar" />
    </button>
  </>
);

export default IconButton;
