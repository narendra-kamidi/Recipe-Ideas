import React from "react";
import RecipeCard from "../recipecard/RecipeCard";
import styles from "./recipeList.module.css";

const RecipeList = ({ recipes }) => {
  if (!recipes.length) {
    return <p className={styles.noResult}>No recipes found</p>;
  }

  return (
    <div className={styles.grid}>
      {recipes.map((meal) => (
        <RecipeCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default RecipeList;
