
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
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      {/* <Task/> 
       <Pricing/>
      {/* <Pricing/>
      <Signup/>
      <Login/>
      <Work/> */}
      <AllRoutes/>
    </div>
  );
}

export default App;