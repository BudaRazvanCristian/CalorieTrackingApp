import { createContext, useState } from "react";

// Create a Context
const CalorieContext = createContext();

// Create a Provider component
const CalorieProvider = ({ children }) => {
  const [remainingCalories, setRemainingCalories] = useState(0); // Initialize with 0

  return (
    <CalorieContext.Provider
      value={{ remainingCalories, setRemainingCalories }}
    >
      {children}
    </CalorieContext.Provider>
  );
};

export { CalorieContext, CalorieProvider };
