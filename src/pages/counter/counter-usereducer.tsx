import { useReducer, createContext, useContext } from "react";

const CounterContext = createContext(null);
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    default:
      return state;
  }
};

const CounterContextProvider = ({ children }) => {
  return (
    <CounterContext.Provider value={useReducer(reducer, 0)}>
      {children}
    </CounterContext.Provider>
  );
};

const AddoneButton = () => {
  const [, dispatch] = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: "add" })}>Add one</button>
    </div>
  );
};
const Counter = () => {
  const [counter] = useContext(CounterContext);

  return <div>{counter}</div>;
};

export default function CounterUseState() {
  return (
    <CounterContextProvider>
      <AddoneButton />
      <Counter />
    </CounterContextProvider>
  );
}
