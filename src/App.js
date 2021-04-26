import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import IsUserLoggedIn from './helpers/is-user-logged-in';
import UserContext from './context/user';
import * as ROUTES from './constants/routes';
import useAuthListener from './hooks/use-auth-listener';
import './App.css';

const Dashboard = lazy(() => import('./pages/dashboard'));
const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));
const Profile = lazy(() => import('./pages/profile'));
const NotFound = lazy(() => import('./pages/not-found'));

function App() {
  const { user } = useAuthListener();
  
  return (
      <UserContext.Provider value={{ user }}>
          <Router>
            <Suspense fallback={<p>loading...</p>}>
              <Switch>
                <isUserLoggedIn
                    user={user}
                    loggedInPath={ROUTES.DASHBOARD}
                    path={ROUTES.LOGIN}
                >
                    <Login />
                </isUserLoggedIn>
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
