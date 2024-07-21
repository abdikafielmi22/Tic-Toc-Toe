//possiblelities of the game 
export const calculateWinner = (squares) => {
  // All possible winning combinations
  const lines = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
  ];

  // Iterate through all winning combinations
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; // Destructure the indices of the current winning combination
    // Check if the squares at the winning combination indices are the same and not null/undefined
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return the winner symbol ('X' or 'O')
    }
  }
  
  return null; // Return null if there is no winner
};
