import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./recipeDetails.module.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setRecipe(res.data.meals[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) return <p className={styles.loading}>Loading...</p>;

  return (
    <div className={styles.details}>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p><strong>Category:</strong> {recipe.strCategory}</p>
      <p><strong>Area:</strong> {recipe.strArea}</p>
      <p><strong>Instructions:</strong> {recipe.strInstructions}</p>
      {recipe.strYoutube && (
        <a href={recipe.strYoutube}>
          Watch on YouTube
        </a>
      )}
    </div>
  );
};

export default RecipeDetails;
