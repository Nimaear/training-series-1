import React, { useState, useCallback, useEffect } from "react";
import Button from "./components/Button";

// useState
// useCallback
// useEffect

const App: React.FC = () => {
  const [counter, setCounter] = useState(0);

  // setInterval(() => {
  //   setCounter(counter + 1);

  const increase = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  useEffect(() => {
    setTimeout(() => {
      increase();
    }, 1000);
  });

  const clickH = useCallback(() => {
    console.log("hello");
  }, [increase]);

  console.log("App is rerendering");
  return (
    <div className="App">
      Counter: {counter}
      <Button onClick={clickH} content="Click me" />
    </div>
  );
};

export default App;
