import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick }) => {
  const renderSquare = (index) => (
    <Square key={index} value={squares[index]} onClick={() => onClick(index)} />
  );

  return (
    <div className="border-2 border-black p-4">
      <div className="grid grid-cols-3 gap-2 mb-4">
        {squares.map((_, index) => renderSquare(index))}
      </div>
    </div>
  );
};

export default Board;
