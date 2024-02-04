import ConditionalComponent from "./components/ConditionalComponent";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";

function App() {
  // const seatNumbers = 39;
  const person = {
    name: "Rob",
    message: "Hi There",
    emoji: "😶‍🌫️",
    seatNumbers: 123
  };
  return (
    <div className="App">
      <h1> Welcome to my first Vite + React APP </h1>
      {/* <Hello name="Ronald" message="Hi There!!" /> */}
      {/* <Hello
        name="Harry"
        message="Are you there?? !!"
        emoji="🙁"
        seatNum={seatNumbers}
      /> */}
      {/* <Fruits /> */}
      <ConditionalComponent />
      {/* <Hello person={person} /> */}
    </div>
  );
}

export default App;
