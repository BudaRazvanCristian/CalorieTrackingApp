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
      <RemainingCalorieProvider>
        <CalorieProvider>
          <WeightProvider>
            <FoodValueProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/food-entry" element={<FoodEntry />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/plan" element={<PlanComponent />} />
                <Route path="/about" element={<AboutUs />} />
              </Routes>
            </FoodValueProvider>
          </WeightProvider>
        </CalorieProvider>
      </RemainingCalorieProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
