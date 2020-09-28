import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import './index.scss';

const App = () => (
  <>
    {(() => {
      if( navigator.userAgent.match(/(iPhone|iPod|Android.*Mobile)/i)){
        return <Smartphone />
      }else{
        return <Root />
      }
    })()}
  </>
);

const app = document.getElementById('app'); // eslint-disable-line no-undef
ReactDOM.render(
  <App />,
  app,
);
