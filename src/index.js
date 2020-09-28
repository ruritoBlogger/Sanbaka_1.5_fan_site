import React from 'react';
import ReactDOM from 'react-dom';
import {isMobile} from 'react-device-detect';
import Root from './root';
import './index.scss';

const App = () => {
  return (
    <>
      {(() => {
        if (isMobile) {
          return (
            <div id="smartphone">
              このサイトはpcのみに対応しています.
              大変申し訳無いのですが, pcからアクセスしていただけると助かります.
            </div>
          );
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
