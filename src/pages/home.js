import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import TopWindow from '../components/window/top/top_window';
import MemberWindow from '../components/window/member/member_window';
import HistoryWindow from '../components/window/history/history_window';
import Header from '../components/header'
import styles from './home.module.scss';
import Footer from '../components/footer';

const Home = () => {

  return (
    <>
      <Header />
      <Scrollbars autoHeight autoHeightMin={975}>
        <TopWindow />
        <MemberWindow isRight={true} />
        <HistoryWindow />
        <Footer />
      </Scrollbars>
    </>
  )
};

export default Home;
