/**
 * THIRD PARTY IMPORTS
 */
import * as React from 'react';
import { Router, Switch } from 'react-router';

import {
  AuthedRoute,
  AdminAuthedRoute,
  UnauthedRoute,
} from 'app/components/RouteGuards';

/**
 * AUTH IMPORTS
 */
import {
  Login,
} from 'app/res/Auth/pages';

import {
  WorkstationHome,
  NewWorkstation,
  EditWorkstation
} from 'app/res/Workstations';
import { ConfirmDeleteDialog } from 'app/components/dialogs';

export const App = ({ history }: any) => {
  return (
    <Router history={history}>
      <Switch>
        <UnauthedRoute path="/login" component={Login} />
        <AdminAuthedRoute path="/ws/:wid/edit" component={EditWorkstation} />
        <AdminAuthedRoute path="/ws/new" component={NewWorkstation} />
        <AdminAuthedRoute path="/ws" component={NewWorkstation} />
        <AuthedRoute path="/" component={WorkstationHome} />
      </Switch>
      <ConfirmDeleteDialog />
    </Router>
  );
};

