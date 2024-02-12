import { useState } from "react";
import Search from "./Components/Search";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <h1> Welcome to My Food Recipe App!!</h1>
        <Search />
      </div>
    </>
  );
}

export default App;
