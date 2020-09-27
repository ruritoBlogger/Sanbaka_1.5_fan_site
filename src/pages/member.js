import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import MemberWindow from '../components/window/member/member_window';
import AngeWindow from '../components/window/member/ange_window';
import LizeWindow from '../components/window/member/lize_window';
import InuiWindow from '../components/window/member/inui_window';
import Header from '../components/header'

const Member = () => (
  <>
    <Header />
    <Scrollbars autoHeight autoHeightMin={975}>
      <MemberWindow />
      <AngeWindow />
      <LizeWindow />
      <InuiWindow />
    </Scrollbars>
  </>
);

export default Member;

