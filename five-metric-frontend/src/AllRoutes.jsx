import React from 'react'
import { Route , Routes } from 'react-router-dom';

import Home from "./GsPages/Home";
// import { Time } from "./JPpages/Time";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
    <Route path="/" element={<Home />}/>
    {/* <Route path="/time" element={<Time />}/> */}
  </Routes>
      
    </div>
  )
}

export default AllRoutes
