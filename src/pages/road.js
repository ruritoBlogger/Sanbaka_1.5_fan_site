import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import HistoryWindow from '../components/window/history/history_window';
import Header from '../components/header'

const Road = () => {

  return (
    <>
      <Header />
      <Scrollbars autoHeight autoHeightMin={975}>
        <HistoryWindow />
      </Scrollbars>
    </>
  )
};

export default Road;
