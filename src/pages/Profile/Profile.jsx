import React, { useContext, useEffect, useState } from 'react'
import Register from '../RegisterUser/Register'
import { AuthContext } from '@/components/AuthContext'
import axios from 'axios'
import { ImSpinner } from "react-icons/im";


const Profile = () => {
  const {isAuthenticated , userId} = useContext(AuthContext)
  const [userData,setUserData] = useState(null)
  useEffect(() => {
    const fetchUserDetails = async() => {
      if(isAuthenticated && userId){
        try{
          const response = await axios.get(`http://localhost:3000/api/user/${userId}`,
            {
              withCredentials:true
            }) 
            setUserData(response.data)
        }catch(err){
          console.log("Error in fetching Data",err)
        }
      }
    }
    fetchUserDetails() 
  },[isAuthenticated,userId])
  if(userData){
    console.log(userData)
  }
  return (
    <div>
      {userData ? 
      <Register userData={userData}/> 
      :  
      <div className='p-8 bg-slate-200 rounded-lg flex flex-col justify-center items-center'>
        <h2><ImSpinner className="animate-spin" /></h2>
        Please wait... Fetching Your Data
      </div>
      }
      
    </div>
  )
}

export default Profile