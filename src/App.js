import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Users from './user/pages/Users';
import NewPlaces from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation></MainNavigation>
      <main>
      <Switch>
        <Route path="/" exact>
          <Users></Users>
        </Route>
        <Route path="/new-place" exact>
          <NewPlaces></NewPlaces>
        </Route>
        <Redirect to="/" />
      </Switch>
      </main>
    </Router>
  );
}

export default App;
