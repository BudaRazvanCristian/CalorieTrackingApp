import { createContext, useState } from "react";

const FoodValueContext = createContext();

const FoodValueProvider = ({ children }) => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [servingSize, setServingSize] = useState(100);
  const [servings, setServings] = useState(1);
  const [addedFoods, setAddedFoods] = useState([]); // Store added foods

  const addFood = (food, type) => {
    setAddedFoods((prevFoods) => [
      ...prevFoods,
      { ...food, type }, // Add the food with its associated type
    ]);
  };

  return (
    <FoodValueContext.Provider
      value={{
        selectedFood,
        setSelectedFood,
        servingSize,
        setServingSize,
        servings,
        setServings,
        addedFoods,
        addFood, // Expose addFood function
      }}
    >
      {children}
    </FoodValueContext.Provider>
  );
};

export { FoodValueContext, FoodValueProvider };
