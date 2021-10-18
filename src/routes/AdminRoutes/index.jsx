import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

import { useApp } from '../../providers/AppProvider';

function AdminRoutes({ component: Component, ...rest }) {
  const { user } = useApp();
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={props => {
        if (user && user.is_admin) {
          return <Component {...props} />;
        }

        return (
          <Redirect
            to={{
              pathname: '/home',
              state: {
                from: location,
              },
            }}
          />
        );
      }}
    />
  );
}

export default AdminRoutes;
