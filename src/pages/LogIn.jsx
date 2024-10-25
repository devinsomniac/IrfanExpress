import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "@/components/AuthContext";

const LogIn = () => {
  const { setIsAuthenticated } = useContext(AuthContext); // Get context function
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Use navigate for redirection

  const checkAuth = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json", // Ensure the correct content type
          },
          withCredentials: true, // Include credentials for session cookies
        }
      );
      if (response.data.authenticated) {
        setIsAuthenticated(true); // Set authentication state in context
        navigate("/"); // Redirect to homepage after successful login
      } else {
        setErrorMessage("Invalid credentials, please try again.");
      }
    } catch (err) {
      console.log("There is an error in Authentication", err);
      setErrorMessage("Authentication failed, please try again.");
    }
  };

  return (
    <div>
      <Header />
      <div className=" flex flex-col justify-center items-center w-full h-full p-10 ">
        <div className="rounded-2xl p-10 bg-[#f7f5ff] border shadow-2xl">
          <label>Enter Your Email Address </label>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Enter Your password </label>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <div className="flex gap-4 justify-center p-5">
            <Button onClick={checkAuth}>Log In</Button>
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
      <Footer />
    </div>
  );
};

export default LogIn;
