import React, { createContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loding} = createContext(AuthContext)
    const location = useLocation()

    if(loding){
        return <h1 className='text-5xl'>Loading-----</h1>
    }
    if(user && user?.uid){
        return children
    }
    return (
        <div>
              <Navigate to='/login' state={{from: location}}replace></Navigate>
        </div>
    );
};

export default PrivateRoute;