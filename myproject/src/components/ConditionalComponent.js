import { useState } from "react";

const ConditionalComponent = () => {
  const [display, setDisplay] = useState(true);

  return display ? (
    <div>
      <h2>This is Conditional Component</h2>
    </div>
  ) : (
    <div>
      <h2>Nothing to see HERE!!</h2>
    </div>
  );
};

export default ConditionalComponent;
