import Header from "@/components/Header";
import React, { useState } from "react";
import userDetails from "@/Shared/userDetails";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Gender from "./Components/Gender";
import DatePick from "./Components/DatePick";
import AddImage from "./Components/AddImage";

const Register = () => {
  const[formData,setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    address: "",
    contact: "",
    email: "",
    passport: "",
    password: "",
  })
  const handleChange = (e) => {
    const {name,value} = e.target
    setFormData((prev)=>(
      {
        ...prev,
        [name]:value
      }
    ))

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)

  }
  return (
    <div>
      <Header />
      {/* <h2 className="font-bold text-4xl m-5 p-8">Create Profile</h2> */}
      <div className="m-10 p-5 shadow-2xl md:p-14 border rounded-xl">
        <form>
          <h2 className="font-semibold text-3xl">Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:p-10">
            {userDetails.map((item, index) => (
              <div key={index} className="flex flex-col">
                <label> {item.label} {item.required && <span className="text-red-700">*</span>}</label>
                {item.fieldType == "text" ||
                item.fieldType == "tel" ||
                item.fieldType == "password" ||
                item.fieldType == "email" ? (
                  <Input className="w-full" name={item.name} type={item.fieldType} onChange = {handleChange} />
                ) : item.fieldType == "dropdown" ? (
                  <Gender item={item} name={item.name} onChange={handleChange} />
                ) : item.fieldType == "date" ? (
                  <DatePick name={item.name} onChange={handleChange} />
                ) : null}
              </div>
            ))}
          </div>
          <div>
            <AddImage/>
          </div>
          <div className="flex justify-end">
          <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
