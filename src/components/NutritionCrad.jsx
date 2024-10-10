import "./styling/nutritionCard.scss";
import { navigateTo } from "./NavigationHelper";
import { RemainingCalorieContext } from "./Contexts/RemainingCalorieContext";
import { useContext } from "react";

export default function NutritionCard() {
  const { remainingCaloriesMeals } = useContext(RemainingCalorieContext);
  const goTo = navigateTo();

  const handleTrackNowClick = () => {
    goTo("/food-entry");
  };
  return (
    <div className="nutrition-card-container">
      <div className="header-card-container">
        <span>Nutrition</span>
        <a>
          <button onClick={handleTrackNowClick}>+</button>
        </a>
      </div>
      <div className="card-content">
        <section className="content-nutrition">
          <div className="meal">
            <span>Breakfast</span>
            <span className="calories">
              {remainingCaloriesMeals.BREAKFAST} kcal
            </span>
          </div>
          <hr className="container-hr-nutrition" />
          <div className="meal">
            <span>Lunch</span>
            <span className="calories">
              {remainingCaloriesMeals.LUNCH} kcal
            </span>
          </div>
          <hr className="container-hr-nutrition" />
          <div className="meal">
            <span>Dinner</span>
            <span className="calories">
              {remainingCaloriesMeals.DINNER} kcal
            </span>
          </div>
          <hr className="container-hr-nutrition" />
        </section>
      </div>
    </div>
  );
}
