import React from "react";

function One(props) {
  return <div id={`player-${props.player}`}>Player {props.player} WON!</div>;
}

export default One;
