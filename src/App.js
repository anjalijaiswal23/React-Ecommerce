import './App.css';
import Login from './Authorised/Login';
import Registration from './Authorised/Registration';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Registration/>
         <Login/>
      </header>
    </div>
  );
}

export default App;
