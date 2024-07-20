// Import necessary hooks and functions from React and other modules
import { useState, useEffect } from 'react';
import { calculateWinner } from './calculateWinner'; // Import the calculateWinner function

// Define a custom hook for managing game state
export const useGameState = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // State for the game board
  const [gameOver, setGameOver] = useState(false); // State to track if the game is over
  const [winner, setWinner] = useState(null); // State to store the winner

  // Function to reset the game state
  const resetGame = () => {
    setBoard(Array(9).fill(null)); // Reset the board to its initial state
    setGameOver(false); // Reset game over state
    setWinner(null); // Reset winner state
  };

  // useEffect hook to reset the game on component mount
  useEffect(() => {
    resetGame();
  }, []);

  // Function to handle a click on the game board
  const handleClick = (index) => {
    if (board[index] || gameOver) return; // Ignore clicks on filled squares or if the game is over
    const newBoard = board.slice(); // Create a copy of the current board
    const randomSymbol = Math.random() < 0.5 ? 'X' : 'O'; // Randomly choose 'X' or 'O'
    newBoard[index] = randomSymbol; // Update the board at the clicked index
    setBoard(newBoard); // Set the new board state
    const winner = calculateWinner(newBoard); // Check if there is a winner
    if (winner) {
      setWinner(winner); // Set the winner state
      setGameOver(true); // Set game over state
    } else if (newBoard.every((square) => square)) {
      setGameOver(true); // Set game over state if the board is full
    }
  };

  // Return the game state and functions
  return {
    board,
    gameOver,
    winner,
    handleClick,
    resetGame,
  };
};
