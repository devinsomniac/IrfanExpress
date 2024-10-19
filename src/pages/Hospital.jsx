import Header from "@/components/Header";
import React from "react";
import HospitalDetails from "@/Shared/HospitalAppointmentData";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Hospital = () => {
  return (
    <div>
      <Header />
      <div className="p-10">
        <h2 className="font-semibold text-center text-2xl p-2">
          Enter Details for Appointment
        </h2>
        <div className="flex justify-center">
          <form className="border rounded-2xl w-[1000px]">
            <div className="grid grid-cols-1 md:grid-cols-2   gap-5 p-10">
              {HospitalDetails.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <label>{item.label}</label>
                  {item.fieldType == "text" || item.fieldType == "tel" || item.fieldType == "email"? (
                    <Input className="w-full" type={item.fieldType} />
                  ) : (
                    (item.fieldType == "dropdown" ? (
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder={item.label} />
                        </SelectTrigger>
                        <SelectContent>
                          {item.options.map((option,index)=>(
                            <SelectItem key={index} value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : null)
                  )}
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hospital;
