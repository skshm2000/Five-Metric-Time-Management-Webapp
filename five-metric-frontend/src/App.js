import logo from './logo.svg';
import './App.css';
import Signup from './Component-rek/Signup';
import Login from './Component-rek/Login';
import Pricing from './Routes/Pricing';


function App() {
  return (
    <div className="App">
      <Pricing/>
      <Signup/>
      <Login/>
    </div>
  );
}

export default App;
