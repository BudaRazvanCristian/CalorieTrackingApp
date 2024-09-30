import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/Contact";
import FoodEntry from "../pages/Food";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/food-entry" element={<FoodEntry />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
