import logo from './logo.svg';
import './App.css';
import Signup from './Component-rek/Signup';
import Login from './Component-rek/Login';
import Pricing from './Routes/Pricing';

import { Time } from './JPpages/Time';
import SideBarTrackingComponent from './JPComponents/SideBarTrackingComponent';
import { Box, Flex } from '@chakra-ui/react';
import { Task } from './JPpages/Task';
import { Work } from './JPpages/Work';

function App() {
  return (
    <div className="App">
      {/* <Task/> */}
      {/* <Pricing/>
      <Signup/>
      <Login/> */}
      <Work/>
    </div>
  );
}

export default App;
