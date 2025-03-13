import { useEffect, useState } from "react";
import isTicTacBoardWon from "./lib/isTicTacBoardWon";
import { cn } from "../../lib/utils";

export default function TicTac() {
  const [dimensions, setDimensions] = useState(3);
  const [cells, setCells] = useState(Array(dimensions ** 2).fill(""));
  // who has the next move. true: X, false: O
  const [currentPlayer, setCurrentPlayer] = useState(true);

  // victory flag
  const [wonned, setWonned] = useState(false);

  useEffect(() => {
    setWonned(isTicTacBoardWon(cells));
  });

  const handleDimendionsChange = (newDimensions: number) => {
    if (newDimensions < 1 || newDimensions > 9) return;

    setDimensions(newDimensions);
    setCells(Array(newDimensions ** 2).fill(""));
    setWonned(false);
    setCurrentPlayer(true);
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        {wonned ? (
          <h2>Player {currentPlayer ? "O" : "X"} won!</h2>
        ) : (
          <h2>Next turn: {currentPlayer ? "X" : "O"}</h2>
        )}
        <div className="flex gap-1.5">
          <button
            className="w-4 cursor-pointer opacity-75 hover:opacity-100 disabled:pointer-events-none"
            disabled={dimensions === 3}
            onClick={() => handleDimendionsChange(dimensions - 1)}
          >
            -
          </button>
          <div>{dimensions}</div>
          <button
            className="w-4 cursor-pointer opacity-75 hover:opacity-100 disabled:pointer-events-none"
            disabled={dimensions === 9}
            onClick={() => handleDimendionsChange(dimensions + 1)}
          >
            +
          </button>
        </div>
      </div>
      <ul
        className={cn(
          "grid list-none",
          wonned && "shadow-[0_0_8px_4px] shadow-emerald-500 transition-shadow",
        )}
        style={{ gridTemplateColumns: `repeat(${dimensions},1fr)` }}
      >
        {cells.map((cell, index) => (
          <li
            key={index}
            className={cn(
              "pointer-events-none flex h-16 w-16 items-center justify-center border text-5xl select-none",
              cell === "" && !wonned && "pointer-events-auto cursor-pointer",
            )}
            onClick={() => {
              setCells((prev) =>
                prev.map((item, idx) =>
                  idx === index ? (currentPlayer ? "X" : "O") : item,
                ),
              );
              setCurrentPlayer((prev) => !prev);
            }}
          >
            {cell}
          </li>
        ))}
      </ul>
      <button
        className="w-full cursor-pointer border p-2 -outline-offset-4 hover:outline"
        onClick={() => {
          setCurrentPlayer(true);
          setCells(Array(dimensions ** 2).fill(""));
          setWonned(false);
        }}
      >
        reset
      </button>
    </div>
  );
}
