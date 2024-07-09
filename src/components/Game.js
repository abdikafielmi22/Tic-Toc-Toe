import React, { useState } from 'react';
import Board from './Board'; // Importing the Board component
import AwardScreen from './AwardScreen'; // Importing the AwardScreen component

// Game component that manages the state and logic of the Tic-Tac-Toe game
const Game = () => {
  // State variables
  const [board, setBoard] = useState(Array(9).fill(null)); // Initial board state with 9 null values
  const [isXNext, setIsXNext] = useState(true); // State to track the current player
  const [gameOver, setGameOver] = useState(false); // State to track if the game is over
  const [winner, setWinner] = useState(null); // State to track the winner

  // Function to handle cell click
  const handleClick = (index) => {
    const newBoard = [...board]; // Create a copy of the board
    if (newBoard[index] || gameOver) return; // Return if the cell is already filled or the game is over
    newBoard[index] = isXNext ? 'X' : 'O'; // Set the cell value based on the current player
    setBoard(newBoard); // Update the board state
    setIsXNext(!isXNext); // Switch to the next player

    const gameWinner = calculateWinner(newBoard); // Check if there is a winner
    if (gameWinner || newBoard.every(cell => cell)) {
      setGameOver(true); // Set game over state to true if there is a winner or the board is full
      setWinner(gameWinner); // Set the winner
    }
  };

  // Function to calculate the winner
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Return the winner ('X' or 'O')
      }
    }
    return null; // Return null if there is no winner
  };

  // Determine the game status message
  const status = winner ? `Winner: ${winner}` : gameOver ? 'Draw!' : `Next player: ${isXNext ? 'X' : 'O'}`;

  // Function to reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null)); // Reset the board state
    setIsXNext(true); // Set the current player to 'X'
    setGameOver(false); // Set the game over state to false
    setWinner(null); // Set the winner state to null
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="bg-white border-2 border-gray-400 p-6">
        {winner ? (
          // Display the AwardScreen component if there is a winner
          <AwardScreen winner={winner} onPlayAgain={resetGame} />
        ) : (
          <>
            {/* Display the Board component if there is no winner */}
            <Board squares={board} onClick={handleClick} />
            <div className="w-full text-center mb-4">
              <div className="text-lg font-bold">{status}</div>
            </div>
            <button
              onClick={resetGame}
              className="w-full mt-4 bg-blue-500 text-white py-2 rounded"
            >
              Start New Game
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Game;
