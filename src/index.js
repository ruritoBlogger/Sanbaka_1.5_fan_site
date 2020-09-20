import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Root from './root';

const App = () => (
  <>
    <CssBaseLine />
    <Root />
  </>
);

const app = document.getElementById('app'); // eslint-disable-line no-undef
ReactDOM.render(
  <App />,
  app,
);
