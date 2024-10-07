import FoodEntryCard from "../FoodEntryCard.jsx";
import "../styling/food.scss";

export default function FoodEntry() {
  return (
    <div>
      <div className="food-container">
        <FoodEntryCard />
      </div>
    </div>
  );
}
