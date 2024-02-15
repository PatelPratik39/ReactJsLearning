import { useEffect, useState } from "react";

const FoodDetails = ({ foodId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "8765847114e944939f129a3410b3d278";

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div>
        <h1>Food Name : {food.title}</h1>
        <img src={food.image} alt="image" />
      </div>
      <div>
        <span>
          <strong> Cooking Time ⏰ : {food.readyInMinutes} minutes</strong>
        </span>{" "}
        |<span> 🧑🏻 Serves : {food.servings}</span> |
        <span>{food.vegan ? "🐮 Vegan " : " "}</span>
        <span>
          {food.vegetarian ? " 🍏 Vegetarian " : " 🍖 Non-Vegetarian"}
        </span>
        <div>
          <span>Price : $ {food.pricePerServing / 100}</span>
        </div>
      </div>
      <div>
    
        <h2>Instructions : </h2>
        { isLoading ? (
          <p>Loading ....</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>)
        )}
      </div>
    </div>
  );
};

export default FoodDetails;

