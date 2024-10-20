import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div>
      <Header/>
      <div className="flex flex-col justify-center items-center w-full h-full p-10 ">
        <div className="rounded-2xl p-10 bg-slate-300 border border-dashed border-black">
          <label>Enter Your Email Address </label>
          <Input type="email" placeholder="Email" />
          <label>Enter Your password </label>
          <Input type="password" placeholder="Password" />
          <div className="flex gap-4 justify-center p-5">
            <Button>Log In</Button>
            <Button>
              <img
                src="https://img.icons8.com/color/96/google-logo.png"
                height={35}
                width={35}
              />
            </Button>
            <Link to={"/Register"}>
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default LogIn;
