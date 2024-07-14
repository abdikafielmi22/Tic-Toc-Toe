import React, { useState } from 'react';
import Board from './Board';
import AwardScreen from './AwardScreen';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [difficulty, setDifficulty] = useState('easy'); // New state for difficulty level

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
    } else if (!isXNext) {
      makeAIMove(newBoard); // Call AI move after player move
    }
  };

  const makeAIMove = (newBoard) => {
    let aiMove;
    if (difficulty === 'easy') {
      aiMove = getEasyMove(newBoard);
    } else if (difficulty === 'medium') {
      aiMove = getMediumMove(newBoard);
    } else {
      aiMove = getHardMove(newBoard);
    }

    if (aiMove !== null) {
      newBoard[aiMove] = 'O';
      setBoard(newBoard);
      setIsXNext(true);

      const gameWinner = calculateWinner(newBoard);
      if (gameWinner || newBoard.every(cell => cell)) {
        setGameOver(true);
        setWinner(gameWinner);
      }
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

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameOver(false);
    setWinner(null);
  };

  const status = winner ? `Winner: ${winner}` : gameOver ? 'Draw!' : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="bg-white border-2 border-gray-400 p-6">
        {winner ? (
          <AwardScreen winner={winner} onPlayAgain={resetGame} />
        ) : (
          <>
            <div className="flex justify-between mb-4">
              <label>
                Difficulty:
                <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </label>
            </div>
            <Board squares={board} onClick={handleClick} />
            <div className="w-full text-center mb-4">
              <div className="text-lg font-bold">{status}</div>
            </div>
            <button onClick={resetGame} className="w-full mt-4 bg-blue-500 text-white py-2 rounded">
              Start New Game
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const getEasyMove = (newBoard) => {
  const emptyIndices = newBoard.map((val, index) => val === null ? index : null).filter(val => val !== null);
  return emptyIndices.length ? emptyIndices[Math.floor(Math.random() * emptyIndices.length)] : null;
};

const getMediumMove = (newBoard) => {
  // Implement a mix of random and strategic moves for medium difficulty
  return getEasyMove(newBoard); // Placeholder implementation
};

const getHardMove = (newBoard) => {
  // Implement the Minimax algorithm or another advanced strategy
  return getEasyMove(newBoard); // Placeholder implementation
};

export default Game;
