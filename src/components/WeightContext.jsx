import { createContext, useState } from "react";

// Create a Context
const WeightContext = createContext();

// Create a Provider component
const WeightProvider = ({ children }) => {
  const [currWeight, setCurrWeight] = useState(60); // Initialize with 0

  return (
    <WeightContext.Provider value={{ currWeight, setCurrWeight }}>
      {children}
    </WeightContext.Provider>
  );
};

export { WeightContext, WeightProvider };
