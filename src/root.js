import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import Home from './pages/home';
import Member from './pages/member';
import Road from './pages/road';
import Site from './pages/site';

const Notfound = () => (
  <div> 404 not found</div>
);

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/member" render={() => <Member />} />
      <Route exact path="/road" render={() => <Road />} />
      <Route exact path="/site" render={() => <Site />} />
      <Route component={Notfound} />
    </Switch>
  </Router>
);

export default Root;
