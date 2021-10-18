import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppProvider from '../../providers/AppProvider';

const SignUp = lazy(() => import('../../pages/SignUp'));
const SignIn = lazy(() => import('../../pages/SignIn'));
const Home = lazy(() => import('../../pages/Home'));
const Expenses = lazy(() => import('../../pages/Expenses'));
const Purchase = lazy(() => import('../../pages/Purchase'));
const Checks = lazy(() => import('../../pages/Checks'));
const CheckDeposit = lazy(() => import('../../pages/CheckDeposit'));
const ChecksControl = lazy(() => import('../../pages/ChecksControl'));
const CheckDetail = lazy(() => import('../../pages/CheckDetail'));

function MainRoutes() {
  return (
    <Router>
      <AppProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={SignUp} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/home" exact component={Home} />
            <Route path="/expenses" exact component={Expenses} />
            <Route path="/purchase" exact component={Purchase} />
            <Route path="/checks" exact component={Checks} />
            <Route path="/checks/deposit" exact component={CheckDeposit} />
            <Route path="/incomes" exact component={ChecksControl} />
            <Route path="/incomes/details" exact component={CheckDetail} />
          </Switch>
        </Suspense>
      </AppProvider>
    </Router>
  );
}

export default MainRoutes;
