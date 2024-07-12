import React from 'react';
import ProfilesList from '../components/ProfilesList';
import { getData } from '../utils/storage';
import { Link } from 'react-router-dom';

const Profiles = () => {
  const profiles = getData();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profiles</h1>
      <ProfilesList profiles={profiles} />
      <Link to="/" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Back to Home
      </Link>
    </div>
  );
};

export default Profiles;