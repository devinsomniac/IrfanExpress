import React, { useEffect, useState, useRef } from "react";
import VenueCard from "./VenueCard";
import PopularData from "@/Shared/popularData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PopularDestination = () => {
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
    <div
      ref={sectionRef}
      className={`mt-16 hidden md:block transition-all duration-700 transform 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      <h2 className="font-bold text-3xl text-center">Popular Destination</h2>
      <div>
        <div className="p-8 m-10">
          <Carousel>
            <CarouselContent>
              {PopularData.map((venue) => (
                <CarouselItem className="basis-1/4" key={venue.id}>
                  <VenueCard venue={venue} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;
