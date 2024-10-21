import axios from 'axios'
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'
const PrivateRoute = ({element : Component}) => {
  const { isAuthenticated } = useContext(AuthContext);

  if(isAuthenticated === null){
    setTimeout(() => {
        return <div>Loading...</div>
    }, 2000);
    
  }
  return isAuthenticated ? <Component/> : <Navigate to = "/Login" />
}

export default PrivateRoute