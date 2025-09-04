import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import RecipeDetails from "./components/recipeDetails/RecipeDetails";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import MoodFilter from "./components/filtercomponents/MoodFilter";
import TimeFilter from "./components/filtercomponents/TimeFilter";
import PreferencesFilter from "./components/filtercomponents/PreferencesFilter";
import "./App.css";
import "./components/filtercomponents/Filters.css";

function App() {
  const [search, setSearch] = useState("chicken");
  const [recipes, setRecipes] = useState([]);
  const [selectedMood, setSelectedMood] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const location = useLocation(); // Track current route

  // Mock data for moods, times, and preferences
  const moods = ["Comfort Food", "Healthy", "Quick Snack", "Party", "Fancy"];
  const timeOptions = [10, 20, 30, 45, 60]; // in minutes
  const preferences = ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "Keto"];

  // Function to assign mock tags (for demo)
  const assignTags = (meals) => {
    return meals.map((meal) => ({
      ...meal,
      mood: moods[Math.floor(Math.random() * moods.length)],
      cookingTime: timeOptions[Math.floor(Math.random() * timeOptions.length)],
      dietary: preferences.filter(() => Math.random() > 0.7), // Random for now
    }));
  };

  // Fetch recipes from API
  const fetchRecipes = async (ingredient) => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const meals = res.data.meals || [];
      setRecipes(assignTags(meals));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchRecipes(search);
  }, []);

  // Meat keywords for Vegetarian/Vegan filtering
  const meatKeywords = ["beef", "chicken", "pork", "lamb", "fish", "shrimp", "meat"];

  // Filtering logic
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesMood = selectedMood ? recipe.mood === selectedMood : true;
    const matchesTime = selectedTime
      ? recipe.cookingTime <= parseInt(selectedTime)
      : true;

    let matchesPreferences = true;

    // Vegetarian/Vegan check
    if (selectedPreferences.includes("Vegetarian") || selectedPreferences.includes("Vegan")) {
      matchesPreferences = !meatKeywords.some((meat) =>
        recipe.strMeal.toLowerCase().includes(meat)
      );
    }

    return matchesMood && matchesTime && matchesPreferences;
  });

  return (
    <>
      {/* Navbar */}
      <Navbar
        search={search}
        setSearch={setSearch}
        fetchRecipes={fetchRecipes}
      />

      {/* Show filters only on home page */}
      {location.pathname === "/" && (
        <div className="filters">
          <MoodFilter selectedMood={selectedMood} setSelectedMood={setSelectedMood} />
          <TimeFilter selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
          <PreferencesFilter
            selectedPreferences={selectedPreferences}
            setSelectedPreferences={setSelectedPreferences}
          />
        </div>
      )}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home recipes={filteredRecipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
