// Import necessary modules and hooks from React and other libraries
import React, { useState } from 'react';
import { useAuth } from './AuthProvider'; // Import the useAuth hook for authentication
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook for navigation
import Home from './Home'; // Import the Home component

// Define the Login component
const Login = () => {
  const { user, login, loading, error } = useAuth(); // Get authentication-related states and functions from the context
  const navigate = useNavigate(); // Get the navigate function from react-router-dom
  const [isLoggingIn, setIsLoggingIn] = useState(false); // State to handle the logging in process

  // Function to handle login
  const handleLogin = async () => {
    setIsLoggingIn(true); // Set logging in state to true
    try {
      await login(); // Attempt to log in
      navigate('/home'); // Redirect to Home page upon successful login
    } catch (err) {
      console.error(err); // Log any errors that occur during login
    } finally {
      setIsLoggingIn(false); // Reset logging in state to false
    }
  };

  // If the loading state is true, display a loading message
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="text-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Render the Login component UI
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="text-center">
        {user ? (
          <>
            <Home user={user} /> {/* Render the Home component if user is authenticated */}
          </>
        ) : (
          <>
            <button
              onClick={handleLogin}
              disabled={isLoggingIn}
              className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              {isLoggingIn ? 'Signing in...' : 'Sign in with Google'} {/* Button text changes based on logging in state */}
            </button>
            {error && <div className="mt-4 text-red-500">{error}</div>} {/* Display error message if login fails */}
          </>
        )}
      </div>
    </div>
  );
};

// Export the Login component as the default export
export default Login;
