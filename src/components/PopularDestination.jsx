import React from "react";
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
  return (
    <div className="mt-16 hidden md:block">
      <h2 className="font-bold text-3xl text-center">Popular Destination</h2>
      <div>
        <div className="p-8 m-10">
          <Carousel>
            <CarouselContent>
              {PopularData.map((venue, index) => (
                <CarouselItem className="basis-1/4">
                  <VenueCard venue={venue} key={venue.id} />
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
