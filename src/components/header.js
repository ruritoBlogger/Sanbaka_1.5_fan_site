import React from 'react';
import { useHistory } from 'react-router-dom';
import HeaderButton from './parts/header_button';
import styles from './header.module.scss';

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
      <nav className={styles.root}>
        <HeaderButton handleClick={ () => MoveHomePage()} msg="さんばか" />
        <HeaderButton handleClick={ () => MoveMemberPage()} msg="愉快な仲間たち" />
        <HeaderButton handleClick={ () => MoveRoadPage()} msg="1.5周年までの道のり" />
        <HeaderButton handleClick={() => MoveSitePage()} msg="このサイトについて" />
      </nav>
    </>
  )
};

export default Header;
