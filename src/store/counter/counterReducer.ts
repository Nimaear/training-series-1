import CounterActionTypes from "./counterActions";
import createReducer from "store/createReducer";

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0
};

const counterReducer2 = createReducer(initialState, {
  [CounterActionTypes.INCREMENT]: draft => {
    draft.count = draft.count + 1;
  },
  [CounterActionTypes.DECREMENT]: draft => {
    draft.count = draft.count - 1;
  }
});

export default counterReducer2;
