import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

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
      <AppBar position="sticky" className={styles.root}>
        <Toolbar>
          <Button onClick={MoveHomePage} >さんばか</Button>
          <Button onClick={MoveMemberPage} >愉快な仲間たち</Button>
          <Button onClick={MoveRoadPage} >1.5周年までの道のり</Button>
          <Button onClick={MoveSitePage} >このサイトについて</Button>
        </Toolbar>
      </AppBar>
    </>
  )
};

export default Header;
