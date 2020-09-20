import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  button: {
    "font-size": "40",
  }
}));

const Header = () => {
  const history = useHistory();

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
      <AppBar position="sticky">
        <Toolbar>
          <button onClick={MoveHomePage} >さんばか</button>
          <button onClick={MoveMemberPage} >愉快な仲間たち</button>
          <button onClick={MoveRoadPage} >1.5周年までの道のり</button>
          <button onClick={MoveSitePage} >このサイトについて</button>
        </Toolbar>
      </AppBar>
    </>
  )
};

export default Header;
