import React from 'react'
import { Navigate } from 'react-router-dom';
import { hasToken, getSession } from '../helper/session';

const tenant = getSession()
export const AdminRoute = ({ children}) => {
    const isAuthenticated = hasToken();
    

    if (isAuthenticated && JSON.parse(tenant).role == "admin" ) {
      return children
    }
      
    return <Navigate to="/" />
  }

export default AdminRoute