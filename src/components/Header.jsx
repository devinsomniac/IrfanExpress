import React, { useEffect, useState, useContext } from "react";
import logo from "./../../public/logo.png";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import LogInAlert from "./LogInAlert";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { AuthContext } from "./AuthContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logOut } = useContext(AuthContext);
  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-5 flex justify-between items-center">
      <div>
        <Link to={"/"}>
          <img src={logo} alt="logo" height={80} width={70} />
        </Link>
      </div>
      <div className="hidden md:flex lg:flex gap-8 ml-20">
        <Link to={"/"}>
          <li className="list-none">Home</li>
        </Link>
        <Link to={"/Appointment"}>
          <li className="list-none">Appointment</li>
        </Link>
        {isAuthenticated ? (
          <Link to={"/documentpocket"}>
            <li className="list-none">Documents</li>
          </Link>
        ) : (
          <Link to={"/Login"}>
            <li className="list-none">Documents</li>
          </Link>
        )}
      </div>

      {/* Handle authentication state rendering */}
      {isAuthenticated === null ? (
        <div>Loading...</div>
      ) : isAuthenticated ? (
        <Button className="hidden md:block" onClick={logOut}>
          Sign Out
        </Button>
      ) : (
        <div className="gap-3 hidden md:flex">
          <Link to={"Register"}>
            <Button>Sign Up</Button>
          </Link>
          <LogInAlert />
        </div>
      )}

      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 p-4">
            <Link to={"/"} onClick={() => setIsOpen(false)}>
              <li className="list-none">Home</li>
            </Link>
            <Link to={"/Appointment"} onClick={() => setIsOpen(false)}>
              <li className="list-none">Appointment</li>
            </Link>
            <Link to={"/documentpocket"} onClick={() => setIsOpen(false)}>
              <li className="list-none">Documents</li>
            </Link>
            {isAuthenticated === null ? (
              <div>Loading...</div>
            ) : isAuthenticated ? (
              <Button onClick={logOut}>
                Sign Out
              </Button>
            ) : (
              <div className="gap-3">
                <Link to={"Register"}>
                  <Button>Sign Up</Button>
                </Link>
                <LogInAlert />
              </div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
