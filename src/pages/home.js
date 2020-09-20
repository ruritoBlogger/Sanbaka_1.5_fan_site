import React from 'react';
import TopWindow from '../components/window/top_window';
import MemberWindow from '../components/window/member_window';

const Home = () => {

  return (
    <>
      <div>
        <TopWindow />
        <MemberWindow />
        <p>Home page</p>
      </div>
    </>
  )
};

export default Home;
