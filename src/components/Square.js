// src/components/Square.js
import React from 'react';

// Destructuring props for clarity
const Square = ({ value, onClick }) => {
  // Determine the image source based on the value
  const imageSrc = value === 'X' 
    ? require('./Assets/x.png') 
    : value === 'O' 
    ? require('./Assets/o.png') 
    : null;

  return (
    // Button element with Tailwind CSS classes for styling
    <button
      className="w-16 h-16 border-2 border-black flex justify-center items-center bg-gray-100 hover:bg-gray-200"
      onClick={onClick} // Call the onClick handler when the button is clicked
    >
      {imageSrc ? (
        // Conditionally render the image if imageSrc is not null
        <img src={imageSrc} alt={value} className="w-full h-full" />
      ) : null}
    </button>
  );
};

export default Square;
