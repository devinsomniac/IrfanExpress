import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator"
import { Button } from "./ui/button";
import { IoSearchSharp } from "react-icons/io5";
import SearchData from "@/Shared/SearchData";


const Search = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white w-full md:w-max p-8 md:p-5 rounded-md md:rounded-full gap-5 items-center">
      <Select>
        <SelectTrigger className="w-[180px] outline-none md:border-none shadow-none text-lg">
          <SelectValue placeholder="Destination" />
        </SelectTrigger>
        <SelectContent>
        {SearchData.Destination.map((dest,index)=>(
                <SelectItem value={dest.name}>{dest.name}</SelectItem>
            ))}
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="hidden" />

      <Select>
        <SelectTrigger className="w-[180px] outline-none md:border-none shadow-none text-lg">
          <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent>
            {SearchData.Type.map((type,index)=>(
                <SelectItem value={type.name}>{type.name}</SelectItem>
            ))}
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="hidden md:block" />

      <Select>
        <SelectTrigger className="w-[180px] outline-none md:border-none shadow-none text-lg">
          <SelectValue placeholder="Member" />
        </SelectTrigger>
        <SelectContent>
        {SearchData.Members.map((member,index)=>(
                <SelectItem value={member.member}>{member.member}</SelectItem>
            ))}
        </SelectContent>
      </Select>
      <Button className="bg-yellow-300 text-blue-700 rounded-full"><IoSearchSharp /></Button>
    </div>
  );
};

export default Search;
