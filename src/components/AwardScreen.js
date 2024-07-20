import React from 'react';
import Confetti from 'react-confetti';

const AwardScreen = ({ winner, onPlayAgain }) => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      {/* Confetti Animation */}
      <Confetti width={window.innerWidth} height={window.innerHeight} />

      <div className="animate-bounce text-center p-8 bg-white bg-opacity-50 rounded-lg shadow-xl">
        <h2 className="text-5xl font-extrabold text-purple-700 mb-4">🎉 Congratulations {winner}! 🎉</h2>
        <p className="text-lg text-purple-700 mb-8">You've won the game!</p>
        <button
          className="px-6 py-3 bg-green-500 hover:bg-green-700 text-white rounded-full text-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          onClick={onPlayAgain}
        >
          Play Again
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-10 space-x-4">
        <div className="w-16 h-16 bg-white rounded-full shadow-md animate-spin-slow"></div>
        <div className="w-16 h-16 bg-white rounded-full shadow-md animate-spin-slow"></div>
        <div className="w-16 h-16 bg-white rounded-full shadow-md animate-spin-slow"></div>
      </div>
    </div>
  );
};

export default AwardScreen;
