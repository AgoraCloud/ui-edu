/**
 * THIRD PARTY IMPORTS
 */
 import * as React from 'react';
 import { Router, Switch } from 'react-router';
 
 import {
   AuthedRoute,
   AdminAuthedRoute,
   AuthGuard,
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
  NewWorkstation
} from 'app/res/Workstations';
 
 export const App = ({ history }: any) => {
   return (
     <Router history={history}>
      <Switch>
        <UnauthedRoute path="/login" component={Login} />
      </Switch>
       <AuthGuard>
         <Switch>
           <AdminAuthedRoute path="/ws/new" component={NewWorkstation} />
           <AuthedRoute path="/" component={WorkstationHome} />
          </Switch> 
       </AuthGuard>
     </Router>
   );
 };
 
