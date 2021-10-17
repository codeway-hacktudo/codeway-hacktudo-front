import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import AllData from '../pages/AllData';
import MissingData from '../pages/MissingData';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/all-data" exact component={AllData} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default Routes;
