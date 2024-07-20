// Import necessary modules and hooks from React and other libraries
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from './AuthProvider'; // Import the useAuth hook for authentication
import { useSettings } from './settinContext/SettingsContext'; // Import the useSettings hook for settings context

// Define the Home component which takes a 'user' prop
const Home = ({ user }) => {
  const { logout } = useAuth(); // Get the logout function from the authentication context
  const navigate = useNavigate(); // Get the navigate function from react-router-dom
  const { settings } = useSettings(); // Get the settings from the settings context
  const [greeting, setGreeting] = useState(''); // State to store the greeting message
  const [date, setDate] = useState(new Date()); // State to store the current date and time

  // useEffect hook to handle user navigation and greeting message based on the time of day
  useEffect(() => {
    if (!user) {
      navigate('/login'); // Redirect to login if user is not authenticated
    } else {
      const hours = date.getHours();
      if (hours < 12) {
        setGreeting('Good Morning'); // Set morning greeting if before 12 PM
      } else if (hours < 18) {
        setGreeting('Good Afternoon'); // Set afternoon greeting if before 6 PM
      } else {
        setGreeting('Good Evening'); // Set evening greeting if after 6 PM
      }

      const timer = setInterval(() => {
        setDate(new Date()); // Update the date state every minute
      }, 60000);

      return () => clearInterval(timer); // Clean up the interval timer
    }
  }, [user, navigate, date]);

  // Define theme styles based on the settings
  const themeStyles = {
    light: 'bg-gradient-to-r from-gray-100 via-blue-100 to-purple-100 text-gray-800',
    dark: 'bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white',
    ocean: 'bg-gradient-to-r from-blue-400 via-teal-500 to-green-400 text-white',
    sunset: 'bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 text-white',
  };

  // Render the component UI
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-6 ${themeStyles[settings.theme]}`} style={{ fontFamily: settings.font }}>
      <h1 className="text-4xl font-bold mb-8 animate-fade-in">Welcome to Tic-Tac-Toe</h1>
      {user && (
        <div className="text-center mb-4">
          <p className="text-xl">
            {greeting}, <span className="font-semibold">{user.displayName}</span>!
          </p>
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-20 h-20 rounded-full mx-auto mb-4 transform transition-transform duration-300 hover:scale-110"
            />
          )}
        </div>
      )}
      <div className="flex flex-col gap-4">
        <Link
          to="/game"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Start Game
        </Link>
        <Link
          to="/settings"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Settings
        </Link>
        <Link
          to="/about"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          About
        </Link>
        <button
          onClick={logout}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 mt-4"
        >
          Logout
        </button>
      </div>
      <footer className="mt-6 text-center">
        <p className="text-sm text-gray-600">Current time: {date.toLocaleTimeString()}</p>
        <p className="text-sm text-gray-600">Tic-Tac-Toe &copy; 2024</p>
      </footer>
    </div>
  );
};

// Define PropTypes for the Home component
Home.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
  }).isRequired,
};

// Export the Home component as the default export
export default Home;
