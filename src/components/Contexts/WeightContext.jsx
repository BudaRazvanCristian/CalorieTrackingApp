import { createContext, useState } from "react";

// Create a Context
const WeightContext = createContext();

// Create a Provider component
const WeightProvider = ({ children }) => {
  const [weight, setWeight] = useState(70);
  const [goalWeight, setGoalWeight] = useState(65);
  return (
    <WeightContext.Provider
      value={{ weight, setWeight, goalWeight, setGoalWeight }}
    >
      {children}
    </WeightContext.Provider>
  );
};

export { WeightContext, WeightProvider };
