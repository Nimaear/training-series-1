import React, { useEffect, useState, useCallback } from "react";

interface ExampleProps {
  message: string;
}

const Example: React.FC<ExampleProps> = ({ message }) => {
  const [counter, setCounter] = useState(0);

  const increase = useCallback(() => {
    setCounter(counter + 1);
    console.log("scroollllll", message, counter);
  }, [setCounter, counter]);

  useEffect(() => {
    const myHandler = () => {
      increase();
    };
    window.addEventListener("scroll", myHandler);

    return () => {
      window.removeEventListener("scroll", myHandler);
    };
  }, [increase]);

  return <div style={{ position: "absolute", top: 0, right: 0 }}>Example</div>;
};

export default Example;
