// src/components/Square.js
import React from 'react';

const Square = ({ value, onClick }) => {
  const imageSrc = value === 'X' ? require('./Assets/x.png') : value === 'O' ? require('./Assets/o.png') : null;

  return (
    <button
      className="w-16 h-16 border-2 border-black flex justify-center items-center bg-gray-100 hover:bg-gray-200"
      onClick={onClick}
    >
      {imageSrc ? <img src={imageSrc} alt={value} className="w-full h-full" /> : null}
    </button>
  );
};

export default Square;
