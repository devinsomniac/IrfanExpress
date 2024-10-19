import React from 'react'
import { FaUserCircle } from "react-icons/fa";

const AddImage = () => {
  return (
    <div>
        <h2 className='font-semibold text-2xl'>Add Your Profile Photo</h2>
        <div className='grid grid-cols-8 mt-4 mx-10'>
            <label className='font-thin' htmlFor='upload-iamge'>
                <div className='border rounded-xl border-dotted
                 border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md flex justify-center items-center text-4xl text-gray-700'>
                    <FaUserCircle />
                </div>
            </label>
            <input type='file' id='upload-iamge' className='opacity-0'></input>
        </div>
    </div>
  )
}

export default AddImage