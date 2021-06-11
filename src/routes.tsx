import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Routes = () => {
  return (
  
     <Switch>
       <Route path="/" exact render={() => <Redirect
            to="/home"
          />}/>
      <Route component={Home} path={`${process.env.PUBLIC_URL}/home`} exact />
      <Route component={CreatePoint} path={`${process.env.PUBLIC_URL}/create-point`} exact />
     </Switch>
    
  );
};

export default Routes;
