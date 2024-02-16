import "./App.css";
import ConditionalComponent from "./components/ConditionalComponent";
// import FunctionEvent from "./components/FunctionEvent";
// import Counter from "./components/Counter";
// import FunctionalCounter from "./components/FunctionalCounter";
// import Message from "./components/Message";
// import Profile from "./components/Profile";
// import Resume from "./components/Resume";
// import ClassEvent from "./components/ClassEvent";

function App() {
  return (
    <div className="App">
      <h1> It's My ReactJS Project...🧑🏻‍💻</h1>
      {/* <Profile name="Pratik" lastName="Patel"/> */}
      {/* <Message messageContent = ' This is a message from Props .. '/> */}
      {/* <Counter /> */}
      {/* <FunctionalCounter/> */}
      <ConditionalComponent />
      {/* <Resume name = 'Mowglee'/> */}
      {/* <FunctionEvent/> */}
      {/* <ClassEvent /> */}
    </div>
  );
}

export default App;
