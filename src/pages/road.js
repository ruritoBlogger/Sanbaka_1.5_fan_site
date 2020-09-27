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
      </Scrollbars>
    </>
  )
};

export default Road;
