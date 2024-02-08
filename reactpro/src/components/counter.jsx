import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  // const [decreaseBy, setDecreaseBy] = useState(1);

  function increment() {
    setCount(count + incrementBy);
  }
  function decrement() {
    setCount(count - incrementBy);
  }

  function handleIncrease() {
    setIncrementBy(incrementBy + 1);
  }

  function handleDecrease() {
    setIncrementBy(incrementBy - 1);
  }
  return (
    <>
      <h3>State practice </h3>
      <h1>Count Value is : {count}</h1>
      <button onClick={increment}> Increment </button>

      <button onClick={decrement}> Decrement </button>
      <br />
      <h1> We are Incrementing value by : {incrementBy}</h1>
      <button onClick={handleIncrease}> Increment </button>

      <button onClick={handleDecrease}> Decrement </button>
    </>
  );
};

export default Counter;
