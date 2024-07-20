// Import necessary modules and hooks from React and Firebase
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, provider } from '../firebase'; // Import Firebase authentication and provider
import { signInWithPopup, signOut } from 'firebase/auth'; // Import signInWithPopup and signOut functions from Firebase

// Create a context for authentication
const AuthContext = createContext();

// Define the AuthProvider component to wrap around children components
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to store the authenticated user
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to store any errors

  // useEffect hook to handle authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Set the authenticated user
      setLoading(false); // Set loading to false
    });
    return () => unsubscribe(); // Cleanup the subscription on component unmount
  }, []);

  // Function to handle login
  const login = async () => {
    setError(null); // Reset any previous errors
    try {
      await signInWithPopup(auth, provider); // Sign in with popup using Firebase auth provider
    } catch (err) {
      setError(err.message); // Set error message if login fails
    }
  };

  // Function to handle logout
  const logout = async () => {
    try {
      await signOut(auth); // Sign out using Firebase auth
      setUser(null); // Reset the user state to null
    } catch (err) {
      setError(err.message); // Set error message if logout fails
    }
  };

  // Provide the authentication context to children components
  return (
    <AuthContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
