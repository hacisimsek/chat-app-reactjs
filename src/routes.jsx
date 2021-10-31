import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Login from './pages/Login';
import Chat from './pages/Chat';
import Detail from './pages/Detail';

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/chat" component={Chat} />
        <Route path="/login" component={Login} />
        {/* <Route path="/:user/:id/detail" component={Detail} /> */}
      </Switch>
    </HashRouter>
  );
}

export default Routes;
