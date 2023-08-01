import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Users from './user/pages/Users';
import NewPlaces from './places/pages/NewPlace';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users></Users>
        </Route>
        <Route path="/new-place" exact>
          <NewPlaces></NewPlaces>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
