import ProgressCard from "../ProgressCard";
import NutritionCard from "../NutritionCrad";
import Header from "../Header";
import "../styling/home.scss";
import MeasurementsCard from "../MeasurementsCard";
import RecipesCard from "../RecipesCard";

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
            <NutritionCard />

            <MeasurementsCard />
          </div>
        </div>
      </div>
    </>
  );
}
