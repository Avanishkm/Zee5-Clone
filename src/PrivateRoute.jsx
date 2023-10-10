import React from 'react'
import Auth from './auth'
import { Route, Navigate} from 'react-router-dom';

const PrivateRoute = ({ children}) => {
    const isAuthenticated = Auth.isAuthenticated();

  return isAuthenticated ? (
    <div>{children}</div>
   ) : (
     <Navigate to="/login" replace />
   );
}

export default PrivateRoute;
