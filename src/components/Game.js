// src/components/Game.js
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
  const emptyIndices = newBoard.map((val, index) => val === null ? index : null).filter(val => val !== null);
  // Check if AI can win
  for (let i = 0; i < emptyIndices.length; i++) {
    const testBoard = [...newBoard];
    testBoard[emptyIndices[i]] = 'O';
    if (calculateWinner(testBoard) === 'O') {
      return emptyIndices[i];
    }
  }
  // Block opponent's winning move
  for (let i = 0; i < emptyIndices.length; i++) {
    const testBoard = [...newBoard];
    testBoard[emptyIndices[i]] = 'X';
    if (calculateWinner(testBoard) === 'X') {
      return emptyIndices[i];
    }
  }
  // Otherwise, return a random move
  return getEasyMove(newBoard);
};

const getHardMove = (newBoard) => {
  const minimax = (board, depth, isMaximizing) => {
    const winner = calculateWinner(board);
    if (winner === 'O') return 10 - depth;
    if (winner === 'X') return depth - 10;
    if (board.every(cell => cell)) return 0;

    if (isMaximizing) {
      let maxEval = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = 'O';
          const eval = minimax(board, depth + 1, false);
          board[i] = null;
          maxEval = Math.max(maxEval, eval);
        }
      }
      return maxEval;
    } else {
      let minEval = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = 'X';
          const eval = minimax(board, depth + 1, true);
          board[i] = null;
          minEval = Math.min(minEval, eval);
        }
      }
      return minEval;
    }
  };

  let bestMove = null;
  let bestValue = -Infinity;
  for (let i = 0; i < newBoard.length; i++) {
    if (newBoard[i] === null) {
      newBoard[i] = 'O';
      const moveValue = minimax(newBoard, 0, false);
      newBoard[i] = null;
      if (moveValue > bestValue) {
        bestMove = i;
        bestValue = moveValue;
      }
    }
  }
  return bestMove;
};

export default Game;
