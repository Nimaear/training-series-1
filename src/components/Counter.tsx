import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "store/rootReducer";
import { increment, decrement } from "store/counter/counterActions";

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: AppState) => state.counter.count);
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      Counter is at: {count}
    </div>
  );
};

export default Counter;
