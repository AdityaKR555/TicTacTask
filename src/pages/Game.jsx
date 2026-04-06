import React, { useState } from "react";

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const result = calculateWinner(board);
  const winner = result?.winner;
  const winningLine = result?.line;

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div className="flex flex-col items-center mt-10 px-3">

      {/* Title */}
      <h1 className="text-3xl font-bold text-cyan-100 mb-6">
        Tic Tac Toe
      </h1>

      {/* Status */}
      <p className="text-cyan-300 mb-4 text-lg">
        {winner
          ? `Winner: ${winner}`
          : board.every(cell => cell !== null)
          ? "It's a Draw!"
          : `Turn: ${isXTurn ? "X" : "O"}`}
      </p>

      {/* Board */}
      <div className="grid grid-cols-3 gap-3">

        {board.map((cell, index) => {
          const isWinningCell = winningLine?.includes(index);

          return (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`w-20 h-20 md:w-24 md:h-24 
              flex items-center justify-center 
              text-2xl md:text-3xl font-bold 
              rounded-lg cursor-pointer transition-all duration-200
              
              ${
                isWinningCell
                  ? "bg-cyan-400 text-cyan-950 scale-105 shadow-lg shadow-cyan-500/50 animate-pulse"
                  : "bg-cyan-900 text-cyan-100 hover:bg-cyan-700 shadow-md shadow-black/30"
              }
              `}
            >
              {cell}
            </div>
          );
        })}

      </div>

      {/* Reset Button */}
      <button
        onClick={resetGame}
        className="mt-6 bg-cyan-500 hover:bg-cyan-400 
        text-cyan-950 px-6 py-2 rounded-lg font-semibold
        shadow-md shadow-black/30 transition-all duration-200"
      >
        Restart Game
      </button>

    </div>
  );
}

export default Game;


function calculateWinner(board) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return {
        winner: board[a],
        line: [a, b, c]
      };
    }
  }

  return null;
}