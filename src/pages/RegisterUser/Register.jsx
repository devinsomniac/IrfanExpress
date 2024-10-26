import Header from "@/components/Header";
import React, { useState,useEffect } from "react";
import userDetails from "@/Shared/userDetails";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Gender from "./Components/Gender";
import DatePick from "./Components/DatePick";
import AddImage from "./Components/AddImage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Register = ({ userData }) => {
  console.log(userData)
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
    imageUrl: "",
  });

  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false); 
  const [dialogOpen, setDialogOpen] = useState(false); 
  const navigate = useNavigate();
 
  useEffect(() => {
    if (userData) {
      setFormData({
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        gender: userData.gender || "",
        dob: userData.dob || "",
        address: userData.address || "",
        contact: userData.contact || "",
        email: userData.email || "",
        passport: userData.passport || "",
        // password: "", // Reset password fields
        // confirmPassword: "",
        // imageUrl: userData.imageUrl || "",
      });
    }
  }, [userData]);

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
      imageUrl: imageUrl,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    console.log("User data:", userData);
  
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    } else {
      setPasswordError("");
    }
  
    console.log(formData);
    setLoading(true);
    setDialogOpen(true);
  
    try {
      const response = await axios({
        method: userData ? "PUT" : "POST", // Use PUT if userData exists
        url: userData ? `http://localhost:3000/api/updateUser/${userData.id}` : "http://localhost:3000/api/register",
        data: formData,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Form submitted successfully:", response.data);
    } catch (err) {
      console.log("There has been an error", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="m-10 p-5 shadow-2xl md:p-14 bg-[#f7f5ff] border rounded-xl">
        <form>
          <h2 className="font-semibold text-3xl">Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:p-10">
            {userDetails.map((item, index) => (
              <div key={index} className="flex flex-col">
                <label>
                  {item.label}{" "}
                  {item.required && <span className="text-red-700">*</span>}
                </label>
                {item.fieldType === "text" ||
                item.fieldType === "tel" ||
                item.fieldType === "email" ? (
                  <Input
                    className="w-full"
                    name={item.name}
                    type={item.fieldType}
                    onChange={handleChange}
                    value={formData[item.name]}
                  />
                ) : item.fieldType === "dropdown" ? (
                  <Gender
                    item={item}
                    name={item.name}
                    onChange={handleChange}
                    value={formData[item.name]}
                  />
                ) : item.fieldType === "date" ? (
                  <DatePick name={item.name} value={formData[item.name]} onChange={handleChange} />
                ) : null}
                
              </div>
            ))}
             {!userData && (
            <>
              <div className="flex flex-col">
                <label>Password</label>
                <Input
                  className="w-full"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  value={formData.password}
                />
              </div>
              <div className="flex flex-col">
                <label>Confirm Password</label>
                <Input
                  className="w-full"
                  name="confirmPassword"
                  type="password"
                  onChange={handleChange}
                  value={formData.confirmPassword}
                />
              </div>
            </>
          )}
          </div>
          {/* Show password mismatch error */}
          {passwordError && (
            <span className="text-red-500">{passwordError}</span>
          )}
          <div>
            <AddImage onImageUpload={handleImageUpload} />
          </div>
          <div className="flex justify-end">
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </form>
      </div>
      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogTrigger asChild>
          <Button style={{ display: "none" }}>Open Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Submitting your data...</AlertDialogTitle>
            <AlertDialogDescription>
              {loading ? (
                <div className="flex items-center space-x-2">
                  <span
                    className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full"
                    role="status"
                  ></span>
                  <span>Processing, please wait...</span>
                </div>
              ) : (
                "Your registration data has been submitted successfully!"
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setDialogOpen(false);
                navigate("/"); 
              }}
            >
              Close
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Register;
