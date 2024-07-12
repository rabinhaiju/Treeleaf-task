import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const { item } = location.state;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">User Details</h1>
        <div className="flex items-center mb-4">
          {item?.image ? (
            <img
              src={item?.image}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover mr-4"
            />
          ) : (
            <div className="w-20 h-20 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 mr-4">
              No Image
            </div>
          )}
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{item.name}</h2>
            <p className="text-gray-700 dark:text-gray-300 font-bold text-2xl">{item.email}</p>
            <p className="text-gray-700 dark:text-gray-300 font-bold text-2xl">{item.phoneNumber}</p>
          </div>
        </div>
        <div>
          <p className="text-gray-700 dark:text-gray-300 font-bold text-2xl">City: {item.city}</p>
          <p className="text-gray-700 dark:text-gray-300 font-bold text-2xl">Country: {item.country}</p>
          <p className="text-gray-700 dark:text-gray-300 font-bold text-2xl">District: {item.district}</p>
          <p className="text-gray-700 dark:text-gray-300 font-bold text-2xl">Province: {item.province}</p>
          <p className="text-gray-700 dark:text-gray-300 font-bold text-2xl">Date of Birth: {new Date(item.dob).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
