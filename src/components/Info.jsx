import React, { useEffect, useState, useRef } from "react";
import { Button } from "./ui/button";

const Info = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <section className={`transition-opacity duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="https://images.pexels.com/photos/3374249/pexels-photo-3374249.jpeg"
                className="absolute inset-0 h-full w-full object-cover rounded-3xl hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Get Your Itinerary with Us!
              </h2>

              <p className="mt-4 text-gray-600">
                <span className="text-4xl font-semibold text-yellow-500">Irfan Express</span> specializes in creating personalized itineraries for tourism, 
                medical treatment, and adventure trips to various global destinations, ensuring a 
                seamless travel experience. Their services include everything from visa processing to 
                booking tickets, making them a one-stop solution for all travel needs.
              </p>

              <Button className="mt-5 bg-yellow-400 text-black hover:bg-black hover:text-yellow-400">Get Started with your Journey</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
