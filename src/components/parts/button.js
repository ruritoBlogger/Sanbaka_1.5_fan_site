import React from 'react';

/*
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
*/

const Button = (props) => {

  return (
    <>
      <button onClick={props.handleClick}>
        {props.msg}
      </button>
    </>
  )
};

export default Button;

