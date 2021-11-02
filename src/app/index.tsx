/**
 * THIRD PARTY IMPORTS
 */
 import * as React from 'react';
 import { Router, Switch } from 'react-router';
 
 import {
   AuthedRoute,
   AuthGuard,
   UnauthedRoute,
  } from 'app/components/RouteGuards';
 
 /**
  * AUTH IMPORTS
  */
 import {
   Login,
 } from 'app/res/Auth/pages';
 
 export const App = ({ history }: any) => {
   return (
     <Router history={history}>
      <Switch>
        <UnauthedRoute path="/login" component={Login} />
      </Switch>
       <AuthGuard>
         <Switch>
           <AuthedRoute path="/" component={() => <h1>Home</h1>} />
          </Switch> 
       </AuthGuard>
     </Router>
   );
 };
 
