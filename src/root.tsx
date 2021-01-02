import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Member from './pages/member';
import Road from './pages/road';
import Site from './pages/site';

const Root: React.VFC = () => (
  <Router>
    <Switch>
      <Route exact path="/member" render={() => <Member />} />
      <Route exact path="/road" render={() => <Road />} />
      <Route exact path="/site" render={() => <Site />} />
      <Route path="/" render={() => <Home />} />
    </Switch>
  </Router>
);

export default Root;
