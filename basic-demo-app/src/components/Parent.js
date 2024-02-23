import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const handleParentCount = () => {
    setParentCount(parentCount + 1);
    console.log(parentCount);
  };
  const handleChildCount = () => {
    setChildCount(childCount + 1);
    console.log(childCount);
  };

  return (
    <>
      <div>
        <h1> This is Parent Component</h1>
        <h2 className="parenth2">Parent Count is : {parentCount}</h2>

        <Child count={childCount} />
        <button className="parentbtn" onClick={handleParentCount}>
          Increment Parent Count
        </button>
        <br />
        <br />
        <button className="childbtn" onClick={handleChildCount}>
          Increment Child Count
        </button>
      </div>
    </>
  );
};

export default Parent;
