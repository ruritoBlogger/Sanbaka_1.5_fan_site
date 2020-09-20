import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import './index.scss';

const App = () => (
  <>
    <Root />
  </>
);

const app = document.getElementById('app'); // eslint-disable-line no-undef
ReactDOM.render(
  <App />,
  app,
);
