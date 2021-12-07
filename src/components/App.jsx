import React from "react";
import Title from "./Title";
import Playground from "./Playground";
import Greeting from "./Greeting";
import Notification from "./Notification";

function App() {
  return (
    <>
      <Title />
      <Playground />
      <Greeting player="X" />
      <Greeting player="O" />
      <Notification player="X" />
    </>
  );
}

export default App;
