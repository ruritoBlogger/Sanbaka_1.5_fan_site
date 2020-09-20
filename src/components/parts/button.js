import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    "-webkit-appearance": "none",
    "-moz-appearance": "none",
    "appearance": "none",
    "border": 0,
    "border-radius": 0,
    "font-size": "25px",
    "background": "transparent",
    "padding-bottom": "10px",
    "&:hover": {
      "border-bottom": "solid 3px",
    },
    "&:focus": {
      "outline": "none",
      "border-bottom": "solid 3px",
    },
  },
}));

const Button = (props) => {
  const styles = useStyles();

  return (
    <>
      <button onClick={props.handleClick} className={styles.button}>
        {props.msg}
      </button>
    </>
  )
};

export default Button;

