// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="flex items-center justify-between p-4 dark:bg-gray-800 dark:text-white bg-gray-100 text-black">
      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/profiles" className="hover:underline">
          Profiles
        </Link>
      </div>
      <button
        onClick={toggleDarkMode}
        className="px-3 py-2 dark:bg-gray-700 rounded dark:hover:bg-gray-600 bg-gray-200 dark:text-white hover:bg-gray-300 transition-colors duration-300"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </nav>
  );
};

export default Navbar;
