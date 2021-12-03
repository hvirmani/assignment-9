import { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./recipe";

export default function App() {
  const API_ID = "2143b89c";
  const API_KEY = "0c12bc0a6dc6e7116cad7f576f138e8e";

  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("egg");

  useEffect(() => {
    const getRecipes = () => {
      fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          setRecipe(data.hits);
        });
    };
    getRecipes();
    setQuery("");
    setSearch("");
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    if (!search) {
      alert("Try entering correct dish");
      return;
    }
    setQuery(search);
  };

  return (
    <div className="container">
      <form className="form-inline" onSubmit={getSearch}>
        <input
          onChange={updateSearch}
          value={search}
          className="form-control"
          placeholder="Search Item"
        />
        <button className="btn btn-info" type="submit">
          Submit
        </button>
      </form>
      <div className="row">
        {recipes.map((current) => {
          return (
            <Recipe
              key={current.recipe.label}
              title={current.recipe.label}
              ingredients={current.recipe.ingredients}
              calories={current.recipe.calories}
              image={current.recipe.image}
            />
          );
        })}
      </div>
    </div>
  );
}
