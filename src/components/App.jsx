import React, { useState } from "react";
import Title from "./Title";
import Playground from "./Playground";
import Greeting from "./Greeting";
import Notification from "./Notification";

function App() {
  const [player, setPlayer] = useState("O");
  const [cells, setCells] = useState(Array(9).fill(null));
  const [stepNumber, setStepNumber] = useState(0);
  const [winner, setWinner] = useState(findWinner(cells));

  function onClick(i) {
    if (stepNumber === 9) {
      setWinner("Draw");
      return;
    }
    if (winner || cells[i]) {
      return;
    }
    const status = cells.slice(0, stepNumber + 1);
    const current = player;
    // setCells([...status, current]);
    setCells((preCells) => {
      var newCells = preCells;
      newCells[i] = current;
      return newCells;
    });
    setPlayer(() => {
      if (player === "X") return "O";
      return "X";
    });
    setWinner(findWinner(cells));
    setStepNumber((preStep) => {
      return preStep + 1;
    });
  }

  function findWinner(cells) {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [1, 4, 7],
      [2, 5, 8],
      [0, 3, 6],
      [0, 4, 8],
      [2, 4, 6]
    ];
    combinations.forEach((combination) => {
      const [a, b, c] = combination;
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    });
    return null;
  }

  return (
    <>
      <Title />
      <Notification player={player} />
      <Playground cells={cells} onClick={onClick} />
      <Greeting
        result={() => {
          if (winner === null) return null;
          else if (winner === "Draw") return winner;
          else {
            return "Player" + winner + "WON!";
          }
        }}
      />
    </>
  );
}

export default App;
