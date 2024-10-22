import React, { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";

const AddImage = () => {
  const [image, setImage] = useState(null);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div>
      <h2 className='font-semibold text-2xl'>Add Your Profile Photo</h2>
      <div className='flex p-10 flex-col md:flex-row md:justify-between md:items-center '>
        <label className='font-thin' htmlFor='upload-image'>
          <div className='border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md flex justify-center items-center text-4xl text-gray-700'>
            <FaUserCircle />
          </div>
        </label>
        <input
          type='file'
          id='upload-image'
          className='opacity-0'
          onChange={handleImageUpload}
        />
        
        {/* Display the uploaded image */}
        {image && (
          <>
          <div><h2 className='text-center font-medium text-xl'>You Look Great !!</h2></div>
          <div className=' border border-dashed border-blue-300 rounded-lg'>
            <img src={image} alt='Profile' className='w-40 h-40 rounded-full object-cover' />
          </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddImage;
