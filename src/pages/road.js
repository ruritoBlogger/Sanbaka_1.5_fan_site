import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import HistoryWindow from '../components/window/history/history_window';
import Archive from '../components/parts/archive';
import Header from '../components/header'

const Road = () => {

  return (
    <>
      <Header />
      <Scrollbars autoHeight autoHeightMin={975}>
        <HistoryWindow />
        <Archive />
        <Archive />
        <Archive right={true} />
      </Scrollbars>
    </>
  )
};

export default Road;
