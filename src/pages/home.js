import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import TopWindow from '../components/window/top_window';
import MemberWindow from '../components/window/member_window';
import Header from '../components/header'
import styles from './home.module.scss';

const Home = () => {

  return (
    <>
      <Header />
      <Scrollbars autoHeight autoHeightMin={900}>
        <TopWindow />
        <MemberWindow />
        <p>Home page</p>
      </Scrollbars>
    </>
  )
};

export default Home;
