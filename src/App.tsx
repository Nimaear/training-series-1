import React, { useState, useCallback, useEffect } from "react";
import Button from "./components/Button";
import Example from "./components/Example";

// useState
// useCallback
// useEffect
//

const App: React.FC = () => {
  const [counter, setCounter] = useState(0);

  console.log("App is rerendering");
  return (
    <div className="App">
      My counter: {counter}
      <Button content="toggle" onClick={() => setCounter(counter + 1)} />
      <Example
        defaultMessage={counter}
        onChange={newCounter => setCounter(newCounter)}
      />
    </div>
  );
};

export default App;
