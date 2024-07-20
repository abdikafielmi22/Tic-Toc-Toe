import React, { useState } from 'react';
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

const Login = () => {
  const { user, login, loading, error } = useAuth();
  const navigate = useNavigate();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      await login();
      navigate('/home'); // Redirect to Home page
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoggingIn(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="text-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="text-center">
        {user ? (
          <>
          
            <Home user={user} /> {/* Render the Home component */}
          </>
        ) : (
          <>
            <button
              onClick={handleLogin}
              disabled={isLoggingIn}
              className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              {isLoggingIn ? 'Signing in...' : 'Sign in with Google'}
            </button>
            {error && <div className="mt-4 text-red-500">{error}</div>}
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
