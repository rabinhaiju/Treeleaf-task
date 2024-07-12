// src/components/Form.jsx
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userSchema } from '../utils/validation';
import { fetchCountries } from '../services/countryService';
import InputField from './InputField';

const UserForm = ({ onSubmit, initialData, onCancelEdit }) => {
  const [countries, setCountries] = useState([]);
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      country: 'Nepal'
    },
    mode: 'onChange' // This enables real-time validation
  });

  // Watch all fields for changes
  const watchAllFields = watch();

  useEffect(() => {
    const getCountries = async () => {
      try {
        const fetchedCountries = await fetchCountries();
        setCountries(fetchedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    getCountries();
  }, []);

  useEffect(() => {
    if (initialData) {
      Object.keys(initialData).forEach((key) => {
        setValue(key, initialData[key]);
      });
    }
  }, [initialData, setValue]);

  const submitForm = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="space-y-6 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg transition-transform transform">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField label="Name" register={register} name="name" errors={errors} />
        <InputField label="Email" type="email" register={register} name="email" errors={errors} />
        <InputField label="Phone Number" register={register} name="phoneNumber" errors={errors} />
        <InputField label="Date of Birth" type="date" register={register} name="dob" errors={errors} />
        <InputField label="City" register={register} name="city" errors={errors} />
        <InputField label="District" register={register} name="district" errors={errors} />
        <InputField label="Province" type="select" register={register} name="province" errors={errors} options={[1, 2, 3, 4, 5, 6, 7].map(num => ({ value: `Province ${num}`, label: `Province ${num}` }))} />
        <InputField label="Country" type="select" register={register} name="country" errors={errors} options={countries.map(country => ({ value: country.name.common, label: country.name.common }))} />
        <InputField label="Profile Picture" type="file" register={register} name="profilePicture" errors={errors} setValue={setValue} />
      </div>

      <div className="flex justify-between">
        <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 transition-colors duration-300">
          {initialData ? 'Update' : 'Submit'}
        </button>
        {initialData && (
          <button type="button" onClick={onCancelEdit} className="px-6 py-2 bg-gray-300 text-gray-700 rounded shadow-md hover:bg-gray-400 transition-colors duration-300">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default UserForm;
