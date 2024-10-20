import Header from "@/components/Header";
import React, { useState } from "react";
import { HospitalDetails } from "@/Shared/HospitalAppointmentData";
import { MedicalCondition } from "@/Shared/HospitalAppointmentData";
import { HospitalName } from "@/Shared/HospitalAppointmentData";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";
import AddImage from "./AddDocument";

const Hospital = () => {
  const [medical, setMedical] = useState("");
  const [hospital, setHospital] = useState("");
  return (
    <div>
      <Header />
      <div className="p-10">
        <h2 className="font-semibold text-center text-2xl p-2">
          Enter Details for Appointment
        </h2>
        <div className="flex justify-center">
          <form className="border rounded-2xl w-[1000px] p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10">
              {HospitalDetails.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <label>
                    {item.label}{" "}
                    {item.required && <span className="text-red-700">*</span>}
                  </label>
                  {item.fieldType == "text" ||
                  item.fieldType == "tel" ||
                  item.fieldType == "email" ? (
                    <Input className="w-full" type={item.fieldType} />
                  ) : null}
                </div>
              ))}
              <div className="flex flex-col">
                <label>
                  Medical Condition <span className="text-red-700">*</span>
                </label>
                <Select onValueChange={(value) => setMedical(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Medical Condition" />
                  </SelectTrigger>
                  <SelectContent>
                    {MedicalCondition[0].options.map((condition, index) => (
                      <SelectItem key={index} value={condition}>
                        {condition}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {medical === "Other" ? (
                  <div className="mt-4">
                    <label>Specify the Condition</label>
                    <Input className="w-full" />
                  </div>
                ) : null}
              </div>
              <div>
                <label>
                  Hospital <span className="text-red-700">*</span>
                </label>
                <Select onValueChange={(value) => setHospital(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Hospital" />
                  </SelectTrigger>
                  <SelectContent>
                    {HospitalName[0].options.map((hospital, index) => (
                      <SelectItem key={index} value={hospital}>
                        {hospital}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {hospital === "Other" ? (
                  <div className="mt-4">
                    <label>Specify the Hospital</label>
                    <Input className="w-full" />
                  </div>
                ) : null}
              </div>
            </div>
            <div className="px-10">
            <AddImage/>
            </div>
            <div className="p-5 flex justify-end">
            <Button onClick={() => toast("Event has been created.")}>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hospital;
