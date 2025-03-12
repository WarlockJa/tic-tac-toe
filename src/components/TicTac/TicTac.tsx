import { useEffect, useState } from "react";
import isTicTacBoardWon from "./lib/isTicTacBoardWon";
import { cn } from "../../lib/utils";

const DEFAULT_BOARD: string[] = Array(9).fill("");

export default function TicTac() {
  const [cells, setCells] = useState(DEFAULT_BOARD);
  // who has the next move. true: X, false: O
  const [currentPlayer, setCurrentPlayer] = useState(true);

  // victory flag
  const [wonned, setWonned] = useState(false);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setWonned(isTicTacBoardWon(cells));
  });

  return (
    <div className="space-y-2">
      {wonned ? (
        <h2>Player {currentPlayer ? "O" : "X"} won!</h2>
      ) : (
        <h2>Next turn: {currentPlayer ? "X" : "O"}</h2>
      )}
      <ul
        className={cn(
          "grid list-none grid-cols-3",
          wonned && "shadow-[0_0_8px_4px] shadow-emerald-500 transition-shadow",
        )}
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
          setCells(DEFAULT_BOARD);
          setWonned(false);
        }}
      >
        reset
      </button>
      <button
        className="w-full cursor-pointer border p-2 -outline-offset-4 hover:outline"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        rerender {counter}
      </button>
    </div>
  );
}
