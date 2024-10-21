import React, { useState } from "react";
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

const LogInAlert = () => {
  const [isAuthenticate,setIsAuthenticate] = useState(null)
  
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
                <Input className="mb-5" type="email" placeholder="Email" />
                <label>Enter Your password </label>
                <Input className="mb-5" type="password" placeholder="Password" />
                <div className="flex gap-4 justify-center p-5">
                <AlertDialogAction><Button>Log In</Button></AlertDialogAction>
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
