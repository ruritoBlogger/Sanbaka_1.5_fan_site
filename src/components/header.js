import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from './parts/button';

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
      <nav>
        <Button handleClick={ () => MoveHomePage()} msg="さんばか" />
        <Button handleClick={ () => MoveMemberPage()} msg="愉快な仲間たち" />
        <Button handleClick={ () => MoveRoadPage()} msg="1.5周年までの道のり" />
        <Button handleClick={() => MoveSitePage()} msg="このサイトについて" />
      </nav>
    </>
  )
};

export default Header;
