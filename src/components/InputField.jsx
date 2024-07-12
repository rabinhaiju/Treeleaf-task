import React, { useState, useRef } from 'react';

const InputField = ({ label, type = 'text', register, name, errors, options ,setValue}) => {
  const fileInputRef = useRef(null);

  const [preview, setPreview] = useState();

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];


    const urlImage = URL.createObjectURL(file);
 
    console.log(urlImage);
 
    setPreview(urlImage);
    setValue("image" , urlImage);

  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col space-y-2">
      {label && <label className="font-medium">{label}</label>}
      {type === 'select' ? (
        <select
          {...register(name)}
          className={`w-full p-3 border rounded dark:text-black focus:outline-none focus:ring-2 ${errors[name] ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'file' ? (
        <>
          <input
            type="file"
            accept=".png"
            ref={fileInputRef}
            onChange={handleFileInputChange}
            className="hidden"
          />
          <button
            type="button"
            onClick={handleFileInputClick}
            className={`w-full p-3 border rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 ${errors[name] ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
          >
          { preview ? "Change image" : "Upload image"}
          </button>
        </>
      ) : (
        <input
          type={type}
          {...register(name)}
          placeholder={label}
          className={`w-full p-3 border dark:text-black rounded focus:outline-none focus:ring-2 ${errors[name] ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
        />
      )}
      {errors[name] && <p className="text-red-500 text-sm">{errors[name].message}</p>}
    </div>
  );
};

export default InputField;
