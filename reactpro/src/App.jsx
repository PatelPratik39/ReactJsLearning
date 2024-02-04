import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <h1> Welcome to my first Vite + React APP </h1>
      {/* <Hello name="Ronald" message="Hi There!!" /> */}
      <Hello name="Harry" message="Are you there?? !!" emoji='🙁'/>
    </div>
  );
}

export default App;
