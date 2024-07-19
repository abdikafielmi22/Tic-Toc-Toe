import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Error signing in with Google', error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <button 
        onClick={handleLogin} 
        className="bg-blue-500 text-white px-4 py-2 rounded">
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
