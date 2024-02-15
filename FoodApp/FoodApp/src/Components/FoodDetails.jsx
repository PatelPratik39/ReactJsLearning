import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";
import ItemList from "./ItemList";

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
  }, [foodId]); // i have added foodId as in dependecy array of UseEffect hook to get data when we change the recipe item where it will call new API call

  return (
    <div className={styles.recipeCard}>
      <div className={styles.recipeName}>
        <h1>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
      </div>
      <div className={styles.recipeDetails}>
        <span>
          <strong> Cooking Time ⏰ : {food.readyInMinutes} minutes</strong>
        </span>{" "}
        |<span> 🧑🏻 Serves : {food.servings}</span> |
        <span>
          <strong>{food.vegan ? "🐮 Vegan " : " "}</strong>
        </span>
        <span>
          <strong>
            {food.vegetarian ? " 🍏 Vegetarian " : " 🍖 Non-Vegetarian"}
          </strong>
        </span>
        <div>
          <span>
            <strong>Price : $ {food.pricePerServing / 100}</strong>
          </span>
        </div>
      </div>
      <h2> Ingredients :</h2>
      <ItemList food={food} isLoading={isLoading} />
      <div className={styles.recipeInstructions}>
        <h2>Instructions : </h2>
        <ol>
          {isLoading ? (
            <p>Loading ....</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
};

export default FoodDetails;
