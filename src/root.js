import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import Home from './pages/home';
import Member from './pages/member';

const Notfound = () => (
  <div> 404 not found</div>
);

const Root = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/member" render={() => <Member />} />
      <Route component={Notfound} />
    </Switch>
  </Router>
);

export default Root;
