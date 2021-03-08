import React, {lazy, Suspense} from 'react';
import './App.css';

const Dashboard = lazy(() => import('./pages/dashboard'));
const Login = lazy(() => import('/pages/login'));
const SignUp = lazy(() => import('/pages/signup'));
const Profile = lazy(() => import('/pages/profile'));
const NotFound = lazy(() => import('/pages/not-found'));

function App() {
  return (
      <h1 className="text-red-500">Learn React</h1>
  );
}

export default App;
