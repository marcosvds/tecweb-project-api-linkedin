import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact path='/home' component={Home} />
    </Switch>
  );
}
