import ConditionalComponent from "./components/ConditionalComponent";
import Fruit from "./components/Fruit";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Counter from "./components/counter";
import Message from "./components/message";
import Form from "./components/form";

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
      {/* <Message/> */}
      {/* <Counter/> */}
      <Form/>
      {/* <ConditionalComponent /> */}
      {/* <Hello person={person} /> */}
      {/* <Fruit/> */}
    </div>
  );
}

export default App;
