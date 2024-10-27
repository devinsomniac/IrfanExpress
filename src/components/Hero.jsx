import React, { useEffect, useRef, useState } from 'react';
import Search from './Search';
import HeroImage from "./../assets/Hero.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className='flex bg-slate-100 flex-col items-center p-8 gap-6 h-[450px] w-full'>
      <h2 className='text-center font-bold text-4xl'>
        Find The best <span className='text-orange-500'>destination</span> for you with us
      </h2>
      <h2 className='text-center font-bold text-2xl'>Get Your Dream Travel Adventure!</h2>
      <Search />
      
      {/* Image with Tailwind classes for animation */}
      <img 
        src={HeroImage} 
        alt="Hero Image" 
        ref={imageRef} 
        className={`md:mt-8 w-full h-full transition-all duration-700 transform 
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} 
      />
    </div>
  );
};

export default Hero;
