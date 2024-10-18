import React from 'react'
import logo from "./../../public/logo.png"
import { Button } from './ui/button'
const Header = () => {
  return (
    <div className='p-5 flex justify-between items-center'>
        <div>
            <img src={logo} alt='logo' height={80} width={70}/>
        </div>
        <div>
            <ul className='gap-8 hidden md:flex lg:flex'>
                <li>Home</li>
                <li>Appointment</li>
                <li>Documents</li>
            </ul>
        </div>
        <div>
            <Button>Sign In</Button>
        </div>
    </div>
  )
}

export default Header