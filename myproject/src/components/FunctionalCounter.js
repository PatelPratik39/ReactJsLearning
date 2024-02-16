import { useState } from "react";

function FunctionalCounter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <div> Counter value : {counter}</div>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
      <hr></hr>
      <div>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}
export default FunctionalCounter;
