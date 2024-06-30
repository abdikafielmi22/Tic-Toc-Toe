import React, { useState } from 'react';
import Board from './Board';
import AwardScreen from './AwardScreen';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    const newBoard = [...board];
    if (newBoard[index] || gameOver) return;
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner || newBoard.every(cell => cell)) {
      setGameOver(true);
      setWinner(gameWinner);
    }
  };

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
        return squares[a];
      }
    }
    return null;
  };

  const status = winner ? `Winner: ${winner}` : gameOver ? 'Draw!' : `Next player: ${isXNext ? 'X' : 'O'}`;

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameOver(false);
    setWinner(null);
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="bg-white border-2 border-gray-400 p-6">
        {winner ? (
          <AwardScreen winner={winner} onPlayAgain={resetGame} />
        ) : (
          <>
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
