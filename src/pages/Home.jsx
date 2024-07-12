// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import UserForm from '../components/Form';
import Table from '../components/Table';
import { saveData, getData } from '../utils/storage';
import { data } from 'autoprefixer';

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    setUserData(getData());
  }, []);
  
  const handleSubmit = (values) => {
    console.log(values);
    let newData;
  
    // Extract file name from image field
    if (values.image instanceof File) {
      values.imageName = values.image.name;
    }
  
    if (editingIndex !== null) {
      // Editing existing entry
      newData = [...userData];
      newData[editingIndex] = { ...values }; // Replace file object with file name
      setUserData(newData);
      setEditingIndex(null);
    } else {
      // Adding new entry
      newData = [...userData, { ...values }]; // Replace file object with file name
      setUserData(newData);
    }
  
    // Save the updated data
    saveData(newData);
  };
   console.log(userData);
  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const newData = userData.filter((_, i) => i !== index);
    setUserData(newData);
    saveData(newData);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
  };

  return (
    <div className="container mx-auto p-4 dark:bg-gray-800 dark:text-white transition-colors duration-300">
      <h1 className="text-2xl font-bold mb-4">User Data</h1>
      <UserForm 
        onSubmit={handleSubmit} 
        initialData={editingIndex !== null ? userData[editingIndex] : null}
        onCancelEdit={handleCancelEdit}
      />
      <div className="mt-8">
        <Table data={userData} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Home;
