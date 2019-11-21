import React, { useState, useCallback, useEffect } from "react";
import Button from "./components/Button";
import Example from "./components/Example";

// useState
// useCallback
// useEffect

const App: React.FC = () => {
  const [show, setShow] = useState(true);

  console.log("App is rerendering");
  return (
    <div className="App">
      <Button content="toggle" onClick={() => setShow(!show)} />
      {show && <Example message="the window" />}
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
      Scroll
      <br />
    </div>
  );
};

export default App;
