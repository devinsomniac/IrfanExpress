import Header from "@/components/Header";
import React, { useState } from "react";
import userDetails from "@/Shared/userDetails";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Gender from "./Components/Gender";
import DatePick from "./Components/DatePick";
import AddImage from "./Components/AddImage";
import axios from 'axios'

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    address: "",
    contact: "",
    email: "",
    passport: "",
    password: "",
    confirmPassword: "",
    imageUrl : ""
  });

  const [passwordError, setPasswordError] = useState(""); 

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (imageUrl) => {
    setFormData((prev) => ({
      ...prev,
      imageUrl:imageUrl
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    } else {
      setPasswordError(""); 
    }

    
    console.log(formData);
    
    try{
      const response = await axios.post("http://localhost:3000/api/register",formData,{
        headers:{
          "Content-Type":"application/json"
        }
      })
      console.log("Form submitted successfully:", response.data)
    }catch(err){
      console.log("There has been an error",err)
    }
  };

  return (
    <div>
      <Header />
      <div className="m-10 p-5 shadow-2xl md:p-14 border rounded-xl">
        <form>
          <h2 className="font-semibold text-3xl">Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:p-10">
            {userDetails.map((item, index) => (
              <div key={index} className="flex flex-col">
                <label>
                  {item.label} {item.required && <span className="text-red-700">*</span>}
                </label>
                {item.fieldType === "text" ||
                item.fieldType === "tel" ||
                item.fieldType === "password" ||
                item.fieldType === "email" ? (
                  <Input
                    className="w-full"
                    name={item.name}
                    type={item.fieldType}
                    onChange={handleChange}
                  />
                ) : item.fieldType === "dropdown" ? (
                  <Gender item={item} name={item.name} onChange={handleChange} />
                ) : item.fieldType === "date" ? (
                  <DatePick name={item.name} onChange={handleChange} />
                ) : null}
              </div>
            ))}
          </div>
          {/* Show password mismatch error */}
          {passwordError && <span className="text-red-500">{passwordError}</span>}
          <div>
            <AddImage onImageUpload = {handleImageUpload} />
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
