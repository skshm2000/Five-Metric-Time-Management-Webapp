import logo from './logo.svg';
import './App.css';
import Signup from './Component-rek/Signup';
import Login from './Component-rek/Login';
import Pricing from './Routes/Pricing';
import { TimeBar } from './JPComponents/timebar';


function App() {
  return (
    <div className="App">
      {/* <Pricing/>
      <Signup/>
      <Login/> */}
      <TimeBar />
    </div>
  );
}

export default App;