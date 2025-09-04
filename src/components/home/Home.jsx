import React from "react";
import RecipeList from "../recipeList/RecipeList";
import styles from "./home.module.css";

const Home = ({ recipes }) => {
  return (
    <div className={styles.container}>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Home;
