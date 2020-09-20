import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    "background-color": "transparent"
  },
  button: {
    "font-size": "40",
  }
}));

const Header = () => {
  const history = useHistory();
  const styles = useStyles();

  const MoveMemberPage = () => {
    history.push("/member");
  }

  const MoveRoadPage = () => {
    history.push("/road");
  }

  const MoveSitePage = () => {
    history.push("/site");
  }

  const MoveHomePage = () => {
    history.push("/");
  }

  return (
    <>
      <div>
        <button onClick={MoveHomePage} >さんばか</button>
        <button onClick={MoveMemberPage} >愉快な仲間たち</button>
        <button onClick={MoveRoadPage} >1.5周年までの道のり</button>
        <button onClick={MoveSitePage} >このサイトについて</button>
      </div>
    </>
  )
};

export default Header;
