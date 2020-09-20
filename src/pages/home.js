import React from 'react';
import TopWindow from '../components/window/top_window';
import MemberWindow from '../components/window/member_window';
import styles from './home.scss';

const Home = () => {

  return (
    <>
      <div className={styles.scroll}>
        <TopWindow />
        <MemberWindow />
        <p>Home page</p>
      </div>
    </>
  )
};

export default Home;
