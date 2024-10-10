import { createContext, useState } from "react";

// Create a Context
const RemainingCalorieContext = createContext();

// Create a Provider component
const RemainingCalorieProvider = ({ children }) => {
  const [remainingCaloriesMeals, setRemainingCaloriesMeals] = useState({
    BREAKFAST: 0,
    LUNCH: 0,
    DINNER: 0,
    SNACK: 0,
  });

  return (
    <RemainingCalorieContext.Provider
      value={{ remainingCaloriesMeals, setRemainingCaloriesMeals }}
    >
      {children}
    </RemainingCalorieContext.Provider>
  );
};

export { RemainingCalorieContext, RemainingCalorieProvider };
