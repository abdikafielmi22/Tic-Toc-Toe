import React from 'react';

// Square component that represents a single square in the Tic-Tac-Toe board
const Square = ({ value, onClick }) => {
  // Determine the image source based on the value ('X' or 'O')
  const imageSrc = value === 'X' ? require('./Assets/x.png') : value === 'O' ? require('./Assets/o.png') : null;
  
  return (
    // Button element representing the square
    <button
      className="w-16 h-16 border-2 border-black flex justify-center items-center" // Tailwind CSS classes for styling
      onClick={onClick} // Event handler for click event
    >
      {/* Render the image if imageSrc is not null, otherwise render nothing */}
      {imageSrc ? <img src={imageSrc} alt={value} className="w-full h-full" /> : null}
    </button>
  );
};

export default Square;
