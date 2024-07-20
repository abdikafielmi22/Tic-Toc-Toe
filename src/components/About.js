import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-8">
      <h1 className="text-5xl font-extrabold mb-8">About Tic-Tac-Toe</h1>
      <div className="max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        <p className="text-lg mb-6">
          Welcome to our advanced Tic-Tac-Toe game! This game offers a dynamic and engaging experience with user authentication through Google.
        </p>
        <p className="text-lg mb-6">
          You can play with two players, making the game more interactive and fun.
        </p>
        <p className="text-lg mb-6">
          Our game is built using modern web technologies, including React and Firebase.
        </p>
        <div className="bg-gray-200 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Key Features:</h2>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>Visual and UI enhancements with Tailwind CSS</li>
            <li>Responsive design for both desktop and mobile devices</li>
            <li>Player customization options</li>
            <li>Authentication with Google</li>
          </ul>
        </div>
        <p className="text-lg">
          This project utilizes React, Tailwind CSS, and Firebase to deliver a top-notch gaming experience. Enjoy your game!
        </p>
      </div>
    </div>
  );
};

export default About;
