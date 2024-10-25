import { storage } from "@/config/firebase";
import { getDownloadURL, ref, uploadBytesResumable,deleteObject  } from "firebase/storage";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
const AddImage = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [fileRef, setFileRef] = useState(null);
  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // const imageUrl = URL.createObjectURL(file);
      // setImage(imageUrl);
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      setUploading(true);
      setFileRef(storageRef);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`upload is ${progress}% done`);
        },
        (error) => {
          console.log("upload failed :", error);
          setUploading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File Available at : ", downloadURL);
            setImage(downloadURL);
            onImageUpload(downloadURL);
            setUploading(false);
          });
        }
      );
    }
  };
  const handleRemoveImage = () => {
    if (fileRef) {
      deleteObject(fileRef)
        .then(() => {
          console.log("Image deleted successfully");
          setImage(null);
          setFileRef(null)
          onImageUpload(null); // update parent component if needed
        })
        .catch((error) => {
          console.log("Error deleting image:", error);
        });
    } else {
      setImage(null);
      onImageUpload(null);
    }
  };

  return (
    <div>
      <h2 className="font-semibold text-2xl">Add Your Profile Photo</h2>
      <div className="flex p-10 flex-col md:flex-row md:justify-between md:items-center ">
        <label className="font-thin" htmlFor="upload-image">
          <div className="border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md flex justify-center items-center text-4xl text-gray-700">
            <FaUserCircle />
          </div>
        </label>
        <input
          type="file"
          id="upload-image"
          className="opacity-0"
          onChange={handleImageUpload}
        />

        <div className="relative flex justify-center items-center">
          {uploading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 rounded-full">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent border-t-4 rounded-full animate-spin"></div>
            </div>
          )}
          {image && (
            <div>
              <div>
                <h2 className="text-center font-medium text-xl">
                  You Look Great !!
                </h2>
              </div>
              <div className="border border-dashed border-blue-300 rounded-lg">
                <TiDelete className="text-4xl text-red-800 cursor-pointer " onClick={handleRemoveImage} />
                <img
                  src={image}
                  alt="Profile"
                  className="w-40 h-40 rounded-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddImage;
