import React, { useContext, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import axios from "axios";

const LogInAlert = () => {
  const {setIsAuthenticated} = useContext(AuthContext)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()
  const checkAuth = async() =>{
    try{
      const response = await axios.post("http://localhost:3000/api/auth/login",{email,password},{
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      })
      if(response.data.authenticated){
        setIsAuthenticated(true)
        navigate("/")
      }else{
        setErrorMessage("Invalid credentials, please try again.");
      }
    }catch(err){
      console.log("Error in log in")
    }
  }
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button>Sign in</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">Sign In</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="rounded-2xl p-10">
                <label >Enter Your Email Address </label>
                <Input className="mb-5" type="email" placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
                <label>Enter Your password </label>
                <Input className="mb-5" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <div className="flex gap-4 justify-center p-5">
                <AlertDialogAction><Button onClick={checkAuth}>Log In</Button></AlertDialogAction>
                  <AlertDialogAction>
                    <Button>
                    <img
                      src="https://img.icons8.com/color/96/google-logo.png"
                      height={35}
                      width={35}
                    />
                  </Button>
                  </AlertDialogAction>
                  <Link to={"/register"}> 
                  <Button>Register</Button>
                  </Link>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default LogInAlert;
