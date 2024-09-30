import Navbar from "../Navbar";
import ProgressCard from "../ProgressCard";
import NutritionCard from "../NutritionCrad";
import Header from "../Header";
import "../styling/home.scss";
import MeasurementsCard from "../MeasurementsCard";
import RecipesCard from "../RecipesCard";

export default function Home() {
  return (
    <>
      <Navbar />
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
