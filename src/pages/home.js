import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import TopWindow from '../components/window/top/top_window';
import MemberWindow from '../components/window/member/member_window';
import HistoryWindow from '../components/window/history/history_window';
import Header from '../components/header'
import styles from './home.module.scss';

const Home = () => {

  return (
    <>
      <Header />
      <Scrollbars autoHeight autoHeightMin={975}>
        <TopWindow />
        <MemberWindow isRight={true} />
        <HistoryWindow />
        <p>Home page</p>
      </Scrollbars>
    </>
  )
};

export default Home;
