import React, {lazy, Suspense} from 'react';
import './App.css';

const Dashboard = lazy(() => import('./pages/dashboard'));
const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));
const Profile = lazy(() => import('./pages/profile'));
const NotFound = lazy(() => import('./pages/not-found'));

function App() {
  return (
      <Suspense fallback={<p>loading...</p>}>
        <h1 className="text-red-500">This is where our content will be.</h1>
      </Suspense>
  );
}

export default App;
