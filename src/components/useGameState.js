import { useState } from 'react';

export const useGameState = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameOver(false);
    setWinner(null);
    setIsPaused(false);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index, gameMode, aiMove) => {
    if (board[index] || gameOver || (gameMode === 'ai' && !isXNext)) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner || newBoard.every(cell => cell !== null)) {
      setGameOver(true);
      setWinner(gameWinner);
    } else if (gameMode === 'ai' && !isXNext) {
      aiMove(newBoard);
    }
  };

  return {
    board,
    isXNext,
    gameOver,
    winner,
    isPaused,
    handleClick,
    resetGame,
    setBoard,
    setIsXNext,
    setGameOver,
    setWinner,
    setIsPaused,
    calculateWinner,
  };
};
