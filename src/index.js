import React from 'react';
import ReactDOM from 'react-dom';
import {isMobile} from 'react-device-detect';
import Root from './root';
import Phone from './phone';
import './index.scss';

const App = () => {
  return (
    <>
      {(() => {
        if (isMobile) {
          return <Phone />
        }else{
          return <Root />
        }
      })()}
    </>
  );
};

const app = document.getElementById('app'); // eslint-disable-line no-undef
ReactDOM.render(
  <App />,
  app,
);
