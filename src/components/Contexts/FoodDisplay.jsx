import { useContext } from "react";
import { FoodValueContext } from "./FoodValueContext";

const FoodDisplay = () => {
  const {
    selectedFood,
    servingSize,
    setServingSize,
    servings,
    setServings,
    addFood, // Bring in the addFood function
  } = useContext(FoodValueContext);

  const handleAddFood = () => {
    const foodToAdd = {
      ...selectedFood,
      servingSize,
      servings,
    };
    addFood(foodToAdd); // Add food with current serving size and servings
  };

  if (!selectedFood) {
    return <div>Select a food item</div>; // Fallback if no food is selected
  }

  return (
    <div className="food-display">
      {/* Existing JSX for displaying food */}
      <div className="food-name-button">
        <p>{selectedFood.name}</p>
        <button onClick={handleAddFood}>Add</button> {/* Call handleAddFood */}
      </div>
    </div>
  );
};

export default FoodDisplay;
