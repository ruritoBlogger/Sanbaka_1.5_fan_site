import React from 'react';
import HistoryWindow from '../components/window/history/history_window';
import Archive from '../components/parts/archive';
import Header from '../components/header'
import Footer from '../components/footer';

const Road = () => {

  return (
    <>
      <Header />
      <HistoryWindow />
      <Archive />
      <Archive />
      <Archive right={true} />
      <Footer />
    </>
  )
};

export default Road;
