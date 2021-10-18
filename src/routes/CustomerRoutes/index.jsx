import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

import { useApp } from '../../providers/AppProvider';

function CustomerRoutes({ component: Component, ...rest }) {
  const { user } = useApp();
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={props => {
        if (user && !user.is_admin) {
          return <Component {...props} />;
        }

        return (
          <Redirect
            to={{
              pathname: '/signin',
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

export default CustomerRoutes;
