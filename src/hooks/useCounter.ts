import { createSelector } from "reselect";
import { AppState } from "store/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "store/counter/counterActions";
import { useCallback } from "react";

const getCount = createSelector(
  (state: AppState) => state.counter,
  counter => ({ count: counter.count })
);

const useCounter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(getCount);

  const incrementAction = useCallback(() => dispatch(increment()), [dispatch]);
  const decrementAction = useCallback(() => dispatch(decrement()), [dispatch]);

  return {
    count,
    increment: incrementAction,
    decrement: decrementAction
  };
};

export default useCounter;
