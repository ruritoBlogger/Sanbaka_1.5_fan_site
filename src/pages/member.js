import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import MemberWindow from '../components/window/member_window';
import Header from '../components/header'

const Member = () => (
  <>
    <Header />
    <Scrollbars autoHeight autoHeightMin={975}>
      <MemberWindow />
    </Scrollbars>
  </>
);

export default Member;

