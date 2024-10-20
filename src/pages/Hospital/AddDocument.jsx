import React, { useState } from "react";
import { FaFileAlt } from "react-icons/fa";

const AddDocument = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const onfileSelected = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files);
    setSelectedFiles((prev) => [...prev, ...fileArray]);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {selectedFiles.map((file, index) => (
              <div key={index} className=" border rounded-xl border-dotted border-primary bg-blue-100 flex flex-col justify-center items-center p-5 cursor-pointer hover:shadow-2xl">
                <a
                  href={URL.createObjectURL(file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-serif "
                >
                  {file.name}
                </a>
              </div>
            ))}
        <label htmlFor="upload-medical-file">
          <div className="border rounded-xl border-dotted border-primary bg-blue-100 flex flex-col justify-center items-center p-5 cursor-pointer hover:shadow-2xl">
            <h2 className="text-lg text-center">
              <FaFileAlt />
            </h2>
            <h2 className="text-lg text-center">Medical File</h2>
          </div>
        </label>
        <input
          type="file"
          multiple={true}
          id="upload-medical-file"
          className="opacity-0"
          onChange={onfileSelected}
        />
      </div>
    </div>
  );
};

export default AddDocument;
