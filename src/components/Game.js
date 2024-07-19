import React, { useState, useEffect } from 'react';
import Board from './Board';
import AwardScreen from './AwardScreen';
import { useGameState } from './useGameState';
import { useAIMove } from './useAIMove';

const Game = () => {
  const {
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
  } = useGameState();

  const [difficulty, setDifficulty] = useState('easy');
  const [gameMode, setGameMode] = useState(null);

  const { makeAIMove } = useAIMove(difficulty);

  useEffect(() => {
    if (gameMode === 'ai' && !isXNext && !gameOver) {
      makeAIMove(board, calculateWinner, setBoard, setIsXNext, setGameOver, setWinner);
    }
  }, [board, isXNext, gameMode, gameOver, makeAIMove, calculateWinner, setBoard, setIsXNext, setGameOver, setWinner]);

  const handleClickWrapper = (index) => {
    if (gameMode === 'ai' && !isXNext) return;
    handleClick(index, gameMode, (newBoard) => makeAIMove(newBoard, calculateWinner, setBoard, setIsXNext, setGameOver, setWinner));
  };

  const handleGameModeChange = (mode) => {
    setGameMode(mode);
    resetGame();
  };

  const handleResume = () => {
    if (gameMode === 'ai' && !isXNext) {
      makeAIMove(board, calculateWinner, setBoard, setIsXNext, setGameOver, setWinner);
    }
    setIsPaused(false);
  };

  const status = winner ? `Winner: ${winner}` : gameOver ? 'Draw!' : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="bg-white border-2 border-gray-400 p-6 rounded-lg shadow-lg">
        {winner ? (
          <AwardScreen winner={winner} onPlayAgain={resetGame} />
        ) : (
          <>
            {!gameMode ? (
              <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Tic-Tac-Toe</h1>
                <div className="flex justify-center space-x-4 mb-4">
                  <button onClick={() => handleGameModeChange('ai')} className="bg-blue-500 text-white py-2 px-4 rounded">
                    Play vs AI
                  </button>
                  <button onClick={() => handleGameModeChange('player')} className="bg-green-500 text-white py-2 px-4 rounded">
                    Play vs Player
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex justify-between mb-4">
                  {gameMode === 'ai' && (
                    <label>
                      Difficulty:
                      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="ml-2 p-1 border rounded">
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                      </select>
                    </label>
                  )}
                </div>
                <Board squares={board} onClick={handleClickWrapper} />
                <div className="w-full text-center mb-4">
                  <div className="text-lg font-bold">{status}</div>
                </div>
                <button onClick={isPaused ? handleResume : resetGame} className="w-full mt-4 bg-red-500 text-white py-2 rounded">
                  {isPaused ? 'Resume' : 'Start New Game'}
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Game;
