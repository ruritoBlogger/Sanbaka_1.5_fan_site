import React from 'react';
import { useHistory } from 'react-router-dom';

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
    <div>
      <button onClick={MoveHomePage} >さんばか</button>
      <p>Header</p>
      <button onClick={MoveMemberPage} >愉快な仲間たち</button>
      <button onClick={MoveRoadPage} >1.5周年までの道のり</button>
      <button onClick={MoveSitePage} >このサイトについて</button>
    </div>
  )
};

export default Header;
