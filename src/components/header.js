import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from './parts/button';

const useStyles = makeStyles((theme) => ({
  root: {
    "background-color": "rgba(0,0,0,0)"
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
      <nav className={styles.root}>
        <Button handleClick={ () => MoveHomePage()} msg="さんばか" />
        <Button handleClick={ () => MoveMemberPage()} msg="愉快な仲間たち" />
        <Button handleClick={ () => MoveRoadPage()} msg="1.5周年までの道のり" />
        <Button handleClick={() => MoveSitePage()} msg="このサイトについて" />
      </nav>
    </>
  )
};

export default Header;
