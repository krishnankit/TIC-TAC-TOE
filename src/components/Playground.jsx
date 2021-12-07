import React from "react";
import Cell from "./Cell";

function Playground(props) {
  return (
    <div className="container">
      <div className="grid">
        {props.cells.map((cell, i) => {
          return <Cell key={i} value={cell} onClick={() => props.onClick(i)} />;
        })}
      </div>
    </div>
  );
}

export default Playground;
