import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UserContext from './context/user';
import * as ROUTES from './constants/routes';
import './App.css';

const Dashboard = lazy(() => import('./pages/dashboard'));
const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));
const Profile = lazy(() => import('./pages/profile'));
const NotFound = lazy(() => import('./pages/not-found'));

function App() {
  return (
      <UserContext.Provider>
      <Router>
        <Suspense fallback={<p>loading...</p>}>
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login}/>
            <Route path={ROUTES.SIGN_UP} component={SignUp}/>
            <Route path={ROUTES.PROFILE} component={Profile}/>
            <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
            <Route component={NotFound}/>
          </Switch>
        </Suspense>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
