import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import FoodEntry from "../pages/Food";
import PlanComponent from "../PlanComponent";
import Navbar from "../Navbar";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import { CalorieProvider } from "../CalorieContext";
const AppRouter = () => {
  return (
    <CalorieProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/food-entry" element={<FoodEntry />} />
          <Route path="/plan" element={<PlanComponent />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </CalorieProvider>
  );
};

export default AppRouter;
