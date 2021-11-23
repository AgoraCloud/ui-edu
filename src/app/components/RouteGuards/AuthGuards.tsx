import * as React from 'react';
import { observer } from 'mobx-react';
import { Redirect, Route } from 'react-router';
import { useStores } from 'app/stores';
import { Role } from 'app/constants';
import { LoadingPage } from 'app/components';

export const AdminAuthedRoute = observer((props) => {
  return (
    <AuthedRoute
      {...props}
      component={observer(() => {
        const { authstore } = useStores();
        // console.log(authstore.state)
        if (authstore.state == 'unauthed') return <Redirect to="/login" />;
        switch (authstore.state) {
          case 'loggedin':
            if (authstore.user.permissions.roles.has(Role.SuperAdmin)) {
              return <Route {...props} />;
            }
          default:
            return <Redirect to="/" />;
        }
      })}
    />)
});

export const UnauthedRoute = (props) => {
  return (
    <Route
      {...props}
      component={observer(() => {
        const { authstore } = useStores();
        switch (authstore.state) {
          case 'loggedin': {
            return <Redirect to="/" />;
          }
          case 'loading': {
            return <LoadingPage />;
          }
          case 'unauthed': {
            return <Route component={props.component} />;
          }
        }
        return null;
      })}
    />
  );
};

export const AuthedRoute = (props) => {
  return (
    <Route
      {...props}
      component={observer(() => {
        const { authstore } = useStores();
        switch (authstore.state) {
          case 'loggedin': {
            return <Route component={props.component} />;
          }
          case 'loading': {
            return <LoadingPage />;
          }
          case 'unauthed': {
            return <Redirect to="/login" />;
          }
        }
        return null;
      })}
    />
  );
};