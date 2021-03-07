import logo from './logo.svg';
import { firebase, fieldValue } from './lib/firebase';
import FirebaseContext from './context/firebase';
import './App.css';

function App() {
  return (
    <FirebaseContext.Provider value={{  }}>
      <h1 className="text-red-500">Learn React</h1>
    </FirebaseContext.Provider>
  );
}

export default App;
