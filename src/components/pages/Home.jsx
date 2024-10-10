import ProgressCard from "../ProgressCard";
import NutritionCard from "../NutritionCrad";
import Header from "../Header";
import "../styling/home.scss";
import MeasurementsCard from "../MeasurementsCard";
import RecipesCard from "../RecipesCard";
import { RemainingCalorieProvider } from "../Contexts/RemainingCalorieContext";

// Adjust based on your structure

export default function Home() {
  return (
    <>
      <div className="home-container">
        <Header />
        {/* <hr className="container-hr" /> */}

        <div className="container-cards">
          <ProgressCard />

          <RecipesCard />

          <div className="lower-cards-wrapper">
            <RemainingCalorieProvider>
              <NutritionCard />
            </RemainingCalorieProvider>

            <MeasurementsCard />
          </div>
        </div>
      </div>
    </>
  );
}
