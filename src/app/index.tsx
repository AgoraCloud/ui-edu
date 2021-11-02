// /**
//  * THIRD PARTY IMPORTS
//  */
// import * as React from 'react';
// import { Route, Router, Switch } from 'react-router';

// import {
//   AuthGuard,
//   UnauthedRoute,
// } from 'app/components/RouteGuards';
// import { Login } from 'app/res/Auth';

// export const App = ({ history }: any) => {
//   return (
//     <Router history={history}>
//       <Switch>
//         {/* Signup / Login Paths */}
//         <UnauthedRoute path="/login" component={Login} />
//         <Route path="/" component={() => <h1> test</h1>} />
//       </Switch>

//       {/* workspace paths */}
//       {/* <AuthGuard>
//         <Switch>

//         </Switch>
//       </AuthGuard> */}

//     </Router>
//   );
// };

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
           <AuthedRoute path="/home" component={() => <h1>Home</h1>} />
          </Switch> 
       </AuthGuard>
     </Router>
   );
 };
 
