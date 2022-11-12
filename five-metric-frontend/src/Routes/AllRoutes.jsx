import React from 'react';
import { Routes ,Route} from 'react-router-dom';
import Login from '../Component-rek/Login';
import Signup from '../Component-rek/Signup';
import Home from '../GsPages/Home';
import { Task } from '../JPpages/Task';
import { Time } from '../JPpages/Time';
import { Work } from '../JPpages/Work';
import Pricing from './Pricing';
import PrivateRoute from "../PrivateRoute/PrivateRoute"
const AllRoutes = () => {
    return (
        <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/pricing" element={<Pricing/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/task" element={<Task/>}></Route>
                <Route path="/time" element={<Time/>}></Route>
                <Route path="/work" element={<Work/>}></Route>
        </Routes>
    );
}

export default AllRoutes;
