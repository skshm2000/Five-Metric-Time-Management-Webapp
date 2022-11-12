import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {isAuth} = useSelector(store=>store)
    console.log(isAuth)
    let pathName = useLocation()

    if(isAuth){
        return children
    }
    else {
        return  (
             <Navigate
            to="/login"
            state={{from:pathName}}
            replace
            />)

    }
    
}

export default PrivateRoute;
