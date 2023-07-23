import { useState, createContext, useContext } from "react";

const CounterContext = createContext(null);

const CounterContextProvider = ({ children }) => {
  return (
    <CounterContext.Provider value={useState(0)}>
      {children}
    </CounterContext.Provider>
  );
};

const AddoneButton = () => {
  const [, setCounter] =  (CounterContext);
  return (
    <div>
      <button onClick={() => setCounter((v) => v + 1)}>Add one</button>
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
