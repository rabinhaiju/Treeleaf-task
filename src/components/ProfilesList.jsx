// import React from 'react';

// const ProfilesList = ({ profiles }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {profiles.map((profile, index) => (
//         <div key={index} className="bg-white shadow-md rounded-lg p-4">
//           {profile.profilePicture && (
//             <img 
//               src={URL.createObjectURL(profile.profilePicture)} 
//               alt={`${profile.name}'s profile`}
//               className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
//             />
//           )}
//           <h2 className="text-xl font-semibold mb-2">{profile.name}</h2>
//           <p className="text-gray-600 mb-1">{profile.email}</p>
//           <p className="text-gray-600 mb-1">{profile.phoneNumber}</p>
//           <p className="text-gray-600 mb-1">
//             {profile.city}, {profile.district}, {profile.province}
//           </p>
//           <p className="text-gray-600">{profile.country}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProfilesList;



// ProfilesList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProfilesList = ({ profiles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {profiles.map((profile, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
          <div className="flex items-center mb-4">
            {profile?.image ? (
              <img
                src={profile?.image}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover mr-4"
              />
            ) : (
              <div className="w-20 h-20 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 mr-4">
                No Image
              </div>
            )}
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{profile.name}</h2>
              <p className="text-gray-700 dark:text-gray-300">{profile.email}</p>
              <p className="text-gray-700 dark:text-gray-300">{profile.phoneNumber}</p>
            </div>
          </div>
          <Link 
            to={`/details/${index}`}
            state={{ profile }}
            className="text-blue-500 hover:underline"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProfilesList;
