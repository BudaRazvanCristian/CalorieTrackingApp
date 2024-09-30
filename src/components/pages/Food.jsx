import React from "react";
import Navbar from "../Navbar";
import FoodEntryCard from "../FoodEntryCard.jsx";
import "../styling/food.scss";

export default function FoodEntry() {
  return (
    <div>
      <Navbar />
      <div className="food-container">
        <FoodEntryCard />
      </div>
    </div>
  );
}
