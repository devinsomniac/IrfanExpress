import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

const PrivateRoute = ({element:Component}) => {

    const [isAuthenticated,setIsAuthenticated] = useState(null)
    useEffect(()=>{
        const checkAuth = async () => {
            try{
                const response = await axios.get("/api/auth/check",{ 
                    withCredentials : true
                })
                setIsAuthenticated(response.data.authenticated);
            }catch(e){
                setIsAuthenticated(false)
                console.log("There is an error in Authentication",e)
            }
        }
        checkAuth()
    },[])

    if (isAuthenticated === null) {
        return <div>Loading...</div>;
      }
      return isAuthenticated ? <Component /> : <Navigate to="/Login" />;
}

export default PrivateRoute