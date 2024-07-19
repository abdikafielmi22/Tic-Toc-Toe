
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/game" className="mr-4">Game</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default NavBar;
