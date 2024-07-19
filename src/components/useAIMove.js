export const useAIMove = (difficulty) => {
    const getEasyMove = (board) => {
      const emptyIndices = board.map((val, index) => val === null ? index : null).filter(val => val !== null);
      return emptyIndices.length ? emptyIndices[Math.floor(Math.random() * emptyIndices.length)] : null;
    };
  
    const getMediumMove = (board, calculateWinner) => {
      const emptyIndices = board.map((val, index) => val === null ? index : null).filter(val => val !== null);
      for (let i = 0; i < emptyIndices.length; i++) {
        const testBoard = [...board];
        testBoard[emptyIndices[i]] = 'O';
        if (calculateWinner(testBoard) === 'O') {
          return emptyIndices[i];
        }
      }
      for (let i = 0; i < emptyIndices.length; i++) {
        const testBoard = [...board];
        testBoard[emptyIndices[i]] = 'X';
        if (calculateWinner(testBoard) === 'X') {
          return emptyIndices[i];
        }
      }
      return getEasyMove(board);
    };
  
    const getHardMove = (board, calculateWinner) => {
      const minimax = (board, depth, isMaximizing) => {
        const winner = calculateWinner(board);
        if (winner === 'O') return 10 - depth;
        if (winner === 'X') return depth - 10;
        if (board.every(cell => cell !== null)) return 0;
  
        if (isMaximizing) {
          let maxEval = -Infinity;
          for (let i = 0; i < board.length; i++) {
            if (board[i] === null) {
              board[i] = 'O';
              const evaluation = minimax(board, depth + 1, false);
              board[i] = null;
              maxEval = Math.max(maxEval, evaluation);
            }
          }
          return maxEval;
        } else {
          let minEval = Infinity;
          for (let i = 0; i < board.length; i++) {
            if (board[i] === null) {
              board[i] = 'X';
              const evaluation = minimax(board, depth + 1, true);
              board[i] = null;
              minEval = Math.min(minEval, evaluation);
            }
          }
          return minEval;
        }
      };
  
      let bestMove = null;
      let bestValue = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = 'O';
          const moveValue = minimax(board, 0, false);
          board[i] = null;
          if (moveValue > bestValue) {
            bestMove = i;
            bestValue = moveValue;
          }
        }
      }
      return bestMove;
    };
  
    const makeAIMove = (newBoard, calculateWinner, setBoard, setIsXNext, setGameOver, setWinner) => {
      const aiMove = difficulty === 'easy' ? getEasyMove(newBoard)
                    : difficulty === 'medium' ? getMediumMove(newBoard, calculateWinner)
                    : getHardMove(newBoard, calculateWinner);
  
      if (aiMove !== null) {
        newBoard[aiMove] = 'O';
        setBoard(newBoard);
        setIsXNext(true);
  
        const gameWinner = calculateWinner(newBoard);
        if (gameWinner || newBoard.every(cell => cell !== null)) {
          setGameOver(true);
          setWinner(gameWinner);
        }
      }
    };
  
    return { makeAIMove };
  };
  