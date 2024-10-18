import React from 'react'
import Search from './Search'
import HeroImage from "./../assets/Hero.png"


const Hero = () => {
  return (
    <div className='flex bg-slate-200 flex-col items-center p-8  gap-6 h-[450px] w-full'>
            <h2 className='text-center font-bold text-4xl'>Find The best destination for you with us</h2>
            <h2 className='text-center font-bold text-2xl'>Get Your Dream Travel Adventure!</h2>
            <Search/>
            <img src={HeroImage} alt="Hero Image" className="md:mt-8  w-full h-full" />
    </div>

  )
}

export default Hero