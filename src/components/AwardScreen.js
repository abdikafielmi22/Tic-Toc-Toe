import React from 'react';
import { FaTrophy, FaStar } from 'react-icons/fa'; // Importing FontAwesome icons

// AwardScreen component that displays a congratulatory message for the winner
const AwardScreen = ({ winner, onPlayAgain }) => {
  return (
    <div className="text-center"> {/* Centering the content */}
      <div className="animate-bounce"> {/* Adding a bounce animation */}
        <FaTrophy className="text-yellow-500 text-6xl mx-auto mb-4" /> {/* Trophy icon with styling */}
      </div>
      <h1 className="text-4xl font-bold mb-4 animate-pulse">Congratulations!</h1> {/* Heading with pulse animation */}
      <p className="text-2xl mb-4">Winner: {winner}</p> {/* Displaying the winner */}
      <img 
        src={require(`./Assets/${winner.toLowerCase()}.png`)} 
        alt={winner} 
        className="mx-auto mb-4 w-32 h-32" 
      /> {/* Displaying the winner's image */}
      <div className="flex justify-center space-x-4 mb-4"> {/* Container for stars with spacing */}
        {[...Array(3)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500 text-4xl animate-spin-slow" /> 
        ))}
      </div>
      <button
        onClick={onPlayAgain} // Event handler for the play again button
        className="w-full mt-4 bg-green-500 text-white py-2 rounded" // Button styling
      >
        Play Again
      </button>
    </div>
  );
};

export default AwardScreen;
