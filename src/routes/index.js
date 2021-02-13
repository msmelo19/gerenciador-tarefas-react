import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from '../Pages/Index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  );
}
