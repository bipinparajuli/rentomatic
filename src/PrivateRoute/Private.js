import React from 'react'
import { Navigate } from 'react-router-dom';
import { hasToken, getSession } from '../helper/session';

const tenant = getSession()
export const Private = ({ children}) => {
    const isAuthenticated = hasToken();
    

    if (isAuthenticated && JSON.parse(tenant).role == "tenant" ) {
      return children
    }
      
    return <Navigate to="/" />
  }

export default Private