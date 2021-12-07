import React from "react";

function Square(props) {
  return (
    <div
      // value={props.value}
      onClick={() => {
        props.onClick();
      }}
      class="cell"
    >
      {props.value}
    </div>
  );
}

export default Square;
