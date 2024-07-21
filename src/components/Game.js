import React, { useState, useEffect } from 'react'; // Import necessary hooks from React
import { useGameState } from './useGameState'; // Import custom hook for game state management
import Board from './Board'; // Import Board component to display the game board
import AwardScreen from './AwardScreen'; // Import AwardScreen component to display the winner

const Game = () => {
  // State to manage the player's symbol (X or O)
  const [playerSymbol, setPlayerSymbol] = useState('X');
  // State to manage player names
  const [playerNames, setPlayerNames] = useState({ player1: 'Player 1', player2: 'Player 2' });
  // State to manage the current player
  const [currentPlayer, setCurrentPlayer] = useState('player1');

  // Destructure necessary state and functions from useGameState hook
  const {
    board,       // Current state of the game board
    gameOver,    // Boolean indicating if the game is over
    winner,      // Winner of the game
    handleClick, // Function to handle a square click
    resetGame,   // Function to reset the game
  } = useGameState();

  // useEffect hook to reset the game when the component mounts
  useEffect(() => {
    resetGame();
  }, [resetGame]);

  // Function to handle changes in player names
  const handlePlayerNameChange = (player, name) => {
    setPlayerNames((prevNames) => ({
      ...prevNames,
      [player]: name,
    }));
  };

  // Function to handle square clicks
  const handleSquareClick = (index) => {
    if (handleClick(index)) {
      setCurrentPlayer(currentPlayer === 'player1' ? 'player2' : 'player1'); // Switch the current player
    }
  };

  // Determine the status message based on the game state
  const status = winner
    ? `Winner: ${winner === 'X' ? playerNames.player1 : playerNames.player2}`
    : gameOver
    ? 'Restart!'
    : `Next player: ${currentPlayer === 'player1' ? playerNames.player1 : playerNames.player2}`;

  return (
    <div className="game-container flex flex-col items-center p-6 bg-gradient-to-br from-blue-100 to-blue-300 min-h-screen">
      {winner ? (
        // Display AwardScreen component if there is a winner
        <AwardScreen winner={winner === 'X' ? playerNames.player1 : playerNames.player2} onPlayAgain={resetGame} />
      ) : (
        // Display game interface if there is no winner yet
        <>
          <h1 className="text-4xl font-bold mb-8 text-blue-600">Tic-Tac-Toe</h1>
          <div className="player-names mb-4">
            <div className="mb-2">
              <label className="block mb-2 text-blue-700 font-medium">
                Player 1 Name:
                <input
                  type="text"
                  value={playerNames.player1}
                  onChange={(e) => handlePlayerNameChange('player1', e.target.value)}
                  className="ml-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your name"
                />
              </label>
            </div>
            <div className="mb-2">
              <label className="block mb-2 text-blue-700 font-medium">
                Player 2 Name:
                <input
                  type="text"
                  value={playerNames.player2}
                  onChange={(e) => handlePlayerNameChange('player2', e.target.value)}
                  className="ml-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your name"
                />
              </label>
            </div>
          </div>
          <div className="game-board mb-4">
            <Board squares={board} onClick={handleSquareClick} />
          </div>
          <div className="game-info mt-4">
            <div className="status mb-2 text-lg font-bold text-blue-700">{status}</div>
            <button
              onClick={() => {
                resetGame();
                setCurrentPlayer('player1'); // Reset current player to player1
              }}
              className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Restart Game
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
