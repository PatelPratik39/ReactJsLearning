import { useState, useEffect } from "react";
import styles from './search.module.css'

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "8765847114e944939f129a3410b3d278";

const Search = ({foodData, setFoodData}) => {
  const [query, setQuery] = useState("Pizza");

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();
    //   console.log(data.results);
      setFoodData(data.results);  
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;

/*
    useEffect syntax = useEffect( () => { }, []);
*/
