import React, {lazy, Suspense} from 'react';
import './App.css';

const Dashboard = lazy(() => import('/pages/'))

function App() {
  return (
      <h1 className="text-red-500">Learn React</h1>
  );
}

export default App;
