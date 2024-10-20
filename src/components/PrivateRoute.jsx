import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = () => {
  const [isAuthenticcated,setIsAuthenticated] = useState(null)
  useEffect(()=>{
    const checkAuth = async() =>{
        try{
            const response = await axios.get("/api/auth/check",{
                withCredentials:true
            })
            setIsAuthenticated(response.data.authenticated) 
        }catch(err){
            setIsAuthenticated(false)
            console.log("There is an error in Authentication",err)
        }
    }
    checkAuth()
  },[])

  if(isAuthenticcated === null){
    return <div>Loading...</div>
  }
  return isAuthenticcated ? <Component/> : <Navigate to = "/Login" />
}

export default PrivateRoute