import React from 'react';
import styles from './move_button.module.scss';

const MoveButton = (props) => (
  <>
    <button type="button" className={styles.button} onClick={props.handleClick}>
      top
    </button>
  </>
);

export default MoveButton;
