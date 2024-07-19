import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Welcome to Tic-Tac-Toe</h1>
      {user && (
        <p className="text-xl mb-4">
          Hello, <span className="font-semibold">{user.username}</span>!
        </p>
      )}
      <Link
        to="/game"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mb-4"
      >
        Start Game
      </Link>
      <Link
        to="/about"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mb-4"
      >
        About
      </Link>
      <Link
        to="/leaderboard"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Leaderboard
      </Link>
    </div>
  );
};

export default Home;
