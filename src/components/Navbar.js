// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const NavBar = () => {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/game" className="mr-4">Game</Link>
        <Link to="/about">About</Link>
      </div>
      <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
    </nav>
  );
};

export default NavBar;
