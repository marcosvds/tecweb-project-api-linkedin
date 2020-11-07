import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Location from './pages/Location';
import Language from './pages/Language';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/location' component={Location} />
      <Route exact path='/language' component={Language} />
    </Switch>
  );
}
