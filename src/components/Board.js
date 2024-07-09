import React from 'react';
import Square from './Square'; // Importing the Square component

// Board component that represents the Tic-Tac-Toe board
const Board = ({ squares, onClick }) => {
  // Function to render a single square
  const renderSquare = (index) => (
    <Square
      key={index} // Unique key for each square
      value={squares[index]} // Value ('X', 'O', or null) to display in the square
      onClick={() => onClick(index)} // Event handler for click event on the square
    />
  );

  return (
    <div className="border-2 border-black p-4"> {/* Container for the board with border and padding */}
      <div className="grid grid-cols-3 gap-2 mb-4"> {/* Grid layout with 3 columns and gap between squares */}
        {/* Render each square by mapping through the squares array */}
        {squares.map((_, index) => renderSquare(index))}
      </div>
    </div>
  );
};

export default Board;
