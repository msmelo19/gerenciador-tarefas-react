import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Index from '../Pages/Index';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Tasks from '../Pages/Tasks';

export default function Routes() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/">
        {isLoggedIn ? (<Tasks />) : (<Index />)}
      </Route>
    </Switch>
  );
}
