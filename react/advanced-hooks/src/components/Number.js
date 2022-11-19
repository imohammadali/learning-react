import { useReducer } from "react";

export function Numbers() {
  const [number, setNumber] = useReducer((number, newNumber) => number + newNumber, 0);
  return <h1 onClick={() => setNumber(30)}>{number}</h1>;
}
