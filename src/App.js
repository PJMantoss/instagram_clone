import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import './App.css';

const Dashboard = lazy(() => import('./pages/dashboard'));
const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));
const Profile = lazy(() => import('./pages/profile'));
const NotFound = lazy(() => import('./pages/not-found'));

function App() {
  return (
      <Router>
        <Suspense fallback={<p>loading...</p>}>
          <Switch>
            <Route path={ROUTES.} COMPONENT={}/>
          </Switch>
        </Suspense>
      </Router>
  );
}

export default App;
