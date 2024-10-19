import React from 'react'
import logo from "./../../public/logo.png"
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import LogInAlert from './LogInAlert'
const Header = () => {
  return (
    <div className='p-5 flex justify-between items-center'>
        <div>
            <Link to={"/"}>
            <img src={logo} alt='logo' height={80} width={70}/>
            </Link>
        </div>
        <div>
            <ul className='gap-8 hidden md:flex lg:flex ml-20'>
                <Link to={"/"}>
                <li>Home</li>
                </Link>
                <Link to={"/Appointment"}>
                <li>Appointment</li>
                </Link>
                <Link to={"/documentpocket"}>
                <li>Documents</li>
                </Link>
            </ul>
        </div>
        <div className=' flex gap-3'>
            <Link to={"Register"}>
            <Button>Sign Up</Button>
            </Link>
            <LogInAlert/>
            
        </div>
    </div>
  )
}

export default Header