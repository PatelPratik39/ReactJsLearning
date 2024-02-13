import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import Nav from "./Components/Nav";
import "./App.css";
import Container from "./Components/Container";

function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <>
      <div className="app">
        <Nav />
        <Search foodData={foodData} setFoodData={setFoodData} />
        <Container>
            <FoodList foodData={foodData} />
          {/* <FoodList foodData={foodData} /> */}
        </Container>
      </div>
    </>
  );
}

export default App;
