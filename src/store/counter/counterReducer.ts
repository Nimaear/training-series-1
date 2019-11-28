import { AnyAction } from "redux";
import CounterActionTypes from "./counterActions";

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0
};

const counterReducer = (
  state: CounterState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case CounterActionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      break;
  }
  return state;
};

export default counterReducer;
