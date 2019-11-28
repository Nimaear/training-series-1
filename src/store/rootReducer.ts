import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import { CounterState } from "./counter/counterReducer";

export interface AppState {
  counter: CounterState;
}
const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;
