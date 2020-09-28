import React from 'react';
import MemberWindow from '../components/window/member/member_window';
import AngeWindow from '../components/window/member/ange_window';
import LizeWindow from '../components/window/member/lize_window';
import InuiWindow from '../components/window/member/inui_window';
import Header from '../components/header'
import Footer from '../components/footer';

const Member = () => (
  <>
    <Header />
    <MemberWindow />
    <AngeWindow />
    <LizeWindow />
    <InuiWindow />
    <Footer />
  </>
);

export default Member;

