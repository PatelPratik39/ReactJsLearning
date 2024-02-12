import { useState, useEffect } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "8765847114e944939f129a3410b3d278";

const Search = () => {
  const [query, setQuery] = useState("Pizza");

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        className="type"
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
