import React from "react";
import useCounter from "../hooks/useCounter";

const Counter: React.FC = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <br />
      Counter is at: {count}
    </div>
  );
};

export default Counter;
