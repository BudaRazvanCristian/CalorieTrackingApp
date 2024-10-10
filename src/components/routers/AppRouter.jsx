import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import FoodEntry from "../pages/Food";
import PlanComponent from "../PlanComponent";
import Navbar from "../Navbar";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import { CalorieProvider } from "../Contexts/CalorieContext";
import { WeightProvider } from "../Contexts/WeightContext";
import { RemainingCalorieProvider } from "../Contexts/RemainingCalorieContext";
import { FoodValueProvider } from "../Contexts/FoodValueContext.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <CalorieProvider>
              <WeightProvider>
                <Home />
              </WeightProvider>
            </CalorieProvider>
          }
        />
        <Route
          path="/food-entry"
          element={
            <CalorieProvider>
              <WeightProvider>
                <RemainingCalorieProvider>
                  <FoodValueProvider>
                    <FoodEntry />
                  </FoodValueProvider>
                </RemainingCalorieProvider>
              </WeightProvider>
            </CalorieProvider>
          }
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/plan" element={<PlanComponent />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
