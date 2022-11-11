import logo from './logo.svg';
import './App.css';
import Signup from './Component-rek/Signup';
import Login from './Component-rek/Login';
import Pricing from './Routes/Pricing';
import { TimeBar } from './JPComponents/timebar';

import { Time } from './JPpages/Time';
import SideBarTrackingComponent from './JPComponents/SideBarTrackingComponent';
import { Box, Flex } from '@chakra-ui/react';
import { Task } from './JPpages/Task';
import { Work } from './JPpages/Work';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <Pricing/>
      <Signup/>
      <Login/> */}
      <TimeBar />
=======
      {/* <Task/> */}
      {/* <Pricing/>
      <Signup/>
      <Login/> */}
      <Work/>
>>>>>>> 10ef4b52c5f560d3d58b5a99a1c393ac2def59e1
    </div>
  );
}

export default App;