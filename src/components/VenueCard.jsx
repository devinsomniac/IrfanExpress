import React from "react";
import PopularData from "@/Shared/popularData";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";


const VenueCard = ({venue}) => {
  return (
    <div className="flex flex-col shadow-2xl rounded-3xl p-3">
        <div>
            <img src={venue.image} alt="" height={200} width={300} className="rounded-3xl object-cover hover:scale-105 transition-transform duration-500 ease-in-out" />
        </div>
        <Separator className="mt-5"/>
        <div className="mt-2 p-3">
            <h2 className="text-2xl font-bold">{venue.name}</h2>
            <h2>{venue.Hotel}</h2>
            <h1>{venue.Deal}</h1>
        </div>
        <Button>View Deal</Button>
    </div>
  );
};

export default VenueCard;
