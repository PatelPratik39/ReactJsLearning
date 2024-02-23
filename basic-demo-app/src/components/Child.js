import React from "react";

const Child = ({ count }) => {
  return (
    <>
      <div>
        <h2>Child count is {count}</h2>
      </div>
    </>
  );
};

export default React.memo(Child);
