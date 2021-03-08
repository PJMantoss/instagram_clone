import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <FirebaseContext.Provider value={{ firebase, fieldValue }}>
      <h1 className="text-red-500">Learn React</h1>
    </FirebaseContext.Provider>
  );
}

export default App;
