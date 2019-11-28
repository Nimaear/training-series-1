enum CounterActionTypes {
  INCREMENT = "counter/increment",
  DECREMENT = "counter/decrement"
}

export const increment = () => ({
  type: CounterActionTypes.INCREMENT
});

export const decrement = () => ({
  type: CounterActionTypes.DECREMENT
});

export default CounterActionTypes;
