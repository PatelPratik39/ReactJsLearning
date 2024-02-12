import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1);
  };
  return (
    <div>
      Counter App
      <div>{counter}</div>
      <div>
        <button onClick={handleClick1}>Increment</button>
        <button onClick={handleClick2}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
