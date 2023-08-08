import { useState } from "react";

const AddoneButton = ({ setCounter }) => {
  return (
    <div>
      <button onClick={() => setCounter((v) => v + 1)}>Add one</button>
    </div>
  );
};
const Counter = ({ counter }) => {
  return <div>{counter}</div>;
};

export default function CounterUseFunction() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Counter counter={counter} />
      <AddoneButton setCounter={setCounter} />
    </div>
  );
}
