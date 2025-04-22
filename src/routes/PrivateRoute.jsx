import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)

    if(loading) return <p>Loading ....</p>
    if(user) return children
    return <Navigate to='/login' state={location.pathname} replace={true}></Navigate>
};

export default PrivateRoute;
