import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from '../Pages/Index';
import Register from '../Pages/Register';
import Login from '../Pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" component={Index} />
    </Switch>
  );
}
