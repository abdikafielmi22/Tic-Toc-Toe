import React from 'react';
import { FaTrophy, FaStar } from 'react-icons/fa';

const AwardScreen = ({ winner, onPlayAgain }) => {
  return (
    <div className="text-center">
      <div className="animate-bounce">
        <FaTrophy className="text-yellow-500 text-6xl mx-auto mb-4" />
      </div>
      <h1 className="text-4xl font-bold mb-4 animate-pulse">Congratulations!</h1>
      <p className="text-2xl mb-4">Winner: {winner}</p>
      <img 
        src={require(`./Assets/${winner.toLowerCase()}.png`)} 
        alt={winner} 
        className="mx-auto mb-4 w-32 h-32" 
      />
      <div className="flex justify-center space-x-4 mb-4">
        {[...Array(3)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500 text-4xl animate-spin-slow" />
        ))}
      </div>
      <button
        onClick={onPlayAgain}
        className="w-full mt-4 bg-green-500 text-white py-2 rounded"
      >
        Play Again
      </button>
    </div>
  );
};

export default AwardScreen;
