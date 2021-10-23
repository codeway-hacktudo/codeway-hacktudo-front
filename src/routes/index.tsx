import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import AllData from '../pages/Data/AllData';
import MissingData from '../pages/Data/MissingData';
import UpdateId from '../pages/UpdateId';
import Tree from '../pages/Tree';
import AcceptOpenBanking from '../pages/AcceptOpenBanking';
import BankChoice from '../pages/BankChoice';

import DistributorChoice from '../pages/DistributorChoice';

interface IRoutes {
  toggleTheme(theme: string): void;
}
const Routes: React.FC<IRoutes> = ({toggleTheme}) => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        component={() => <DistributorChoice toggleTheme={toggleTheme} />}
      />
      <Route path="/get-info" exact component={Home} />
      <Route path="/all-data" exact component={AllData} />
      <Route path="/missing-data" exact component={MissingData} />
      <Route path="/update-id" exact component={UpdateId} />
      <Route path="/tree" exact component={Tree} />
      <Route path="/accept-open-banking" exact component={AcceptOpenBanking} />
      <Route path="/bank-choice" exact component={BankChoice} />
    </Switch>
  );
};

export default Routes;
