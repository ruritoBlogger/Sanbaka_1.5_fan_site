import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import './index.scss';

const App: React.FC = () => <Root />;

const app = document.getElementById('app');
ReactDOM.render(<App />, app);
