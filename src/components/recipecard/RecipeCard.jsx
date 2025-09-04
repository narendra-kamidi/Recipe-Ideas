import React from "react";
import { Link } from "react-router-dom";
import styles from "./recipeCard.module.css";

const RecipeCard = ({ meal }) => {
  return (
    <div className={styles.card}>
      {/* Make the image clickable */}
      <Link to={`/recipe/${meal.idMeal}`}>
        <img 
          src={meal.strMealThumb} 
          alt={meal.strMeal} 
          className={styles.image} 
        />
      </Link>

      <h3>{meal.strMeal}</h3>

      {/* Keep the View Recipe button too */}
      <Link to={`/recipe/${meal.idMeal}`} className={styles.button}>
        View Recipe
      </Link>
    </div>
  );
};

export default RecipeCard;
