
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
      {/* <Pricing/>
      <Signup/>
      <Login/> */}
      <TimeBar />
    </div>
  );
}

export default App;