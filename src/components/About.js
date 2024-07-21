// Importing the React library to use its functionalities for creating components
import React from 'react';

// Define the About component using an arrow function
const About = () => {
  // The component returns a JSX structure that represents the UI of the About page
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-8">
      {/* Heading for the About page */}
      <h1 className="text-5xl font-extrabold mb-8">About Tic-Tac-Toe</h1>
      {/* Container for the content with styling */}
      <div className="max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        {/* Introduction paragraph */}
        <p className="text-lg mb-6">
          Welcome to our advanced Tic-Tac-Toe game! This game offers a dynamic and engaging experience with user authentication through Google.
        </p>
        {/* Information about the multiplayer feature */}
        <p className="text-lg mb-6">
          You can play with two players, making the game more interactive and fun.
        </p>
        {/* Technologies used in the project */}
        <p className="text-lg mb-6">
          Our game is built using modern web technologies, including React and Firebase.
        </p>
        {/* Section for key features of the game */}
        <div className="bg-gray-200 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Key Features:</h2>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>Visual and UI enhancements with Tailwind CSS</li>
            <li>Responsive design for both desktop and mobile devices</li>
            <li>Player customization options</li>
            <li>Authentication with Google</li>
          </ul>
        </div>
        {/* Closing statement */}
        <p className="text-lg">
          This project utilizes React, Tailwind CSS, and Firebase to deliver a top-notch gaming experience. Enjoy your game!
        </p>
      </div>
    </div>
  );
};

// Export the About component as the default export of this module
export default About;
