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
const AdminRoutes = lazy(() => import('../AdminRoutes'));
const CustomerRoutes = lazy(() => import('../CustomerRoutes'));

function MainRoutes() {
  return (
    <Router>
      <AppProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={SignUp} />
            <Route path="/signin" exact component={SignIn} />
            <CustomerRoutes path="/home" exact component={Home} />
            <CustomerRoutes path="/expenses" exact component={Expenses} />
            <CustomerRoutes path="/purchase" exact component={Purchase} />
            <CustomerRoutes path="/checks" exact component={Checks} />
            <CustomerRoutes
              path="/checks/deposit"
              exact
              component={CheckDeposit}
            />
            <AdminRoutes path="/incomes" exact component={ChecksControl} />
            <AdminRoutes
              path="/incomes/details"
              exact
              component={CheckDetail}
            />
          </Switch>
        </Suspense>
      </AppProvider>
    </Router>
  );
}

export default MainRoutes;
