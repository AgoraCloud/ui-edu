import * as React from 'react';
import { observer } from 'mobx-react';
import { Redirect, Route } from 'react-router';
import { useStores } from 'app/stores';
import { Role } from 'app/constants';

export const AuthGuard = observer((props) => {
  const { authstore } = useStores();
  // console.log(authstore.state)
  if (authstore.state == 'unauthed') return <Redirect to="/login" />;
  switch (authstore.state) {
    case 'loggedin':
      return props.children;
    default:
      return 'loading...';
  }
});

export const AuthedRoute = observer((props) => {
  const { authstore } = useStores();
  // console.log(authstore.state)
  if (authstore.state == 'unauthed') return <Redirect to="/login" />;
  switch (authstore.state) {
    case 'loggedin':
      return <Route {...props} />;
    default:
      return null;
  }
});

export const AdminAuthedRoute = observer((props) => {
  const { authstore } = useStores();
  const { component } = props;
  // console.log(authstore.state)
  if (authstore.state == 'unauthed') return <Redirect to="/login" />;
  switch (authstore.state) {
    case 'loggedin':
      if(authstore.user.permissions.roles.has(Role.SuperAdmin)){
        return <Route {...props} />;
      }    
    default:
      return <Redirect to="/" />;
  }
});

export const UnauthedRoute = observer((props) => {
  // const store = props[AUTH_STORE] as AuthStore;
  const { authstore } = useStores();

  // const userStore = props[USER_STORE] as UserStore
  // if(userStore.state != 'loaded') return null
  switch (authstore.state) {
    case 'loggedin':
      return <Redirect to="/" />;
    case 'unauthed':
      return <Route {...props} />;
    default:
      return null;
  }
});
