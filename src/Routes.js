import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardPage from "./pages/DashboardPage/DashboardPage";

const Routes = () => {
    return (
      <Switch>
        <Route path="/" exact component={DashboardPage} />
      </Switch>
    );
};

export default Routes;
