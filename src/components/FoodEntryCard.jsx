import { useState, useEffect } from "react";
import "./styling/foodEntryCard.scss";
import GoalSetterComponent from "./GoalSetterComponent";
import "./styling/goalSetter.scss";
import { useContext } from "react";
import { CalorieContext } from "./CalorieContext";

const FoodType = {
  BREAKFAST: "Breakfast",
  LUNCH: "Lunch",
  DINNER: "Dinner",
  SNACK: "Snack",
};

export default function FoodEntryCard() {
  const [showDetails, setShowDetails] = useState(false);
  const [foodData, setFoodData] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [goalCalories, setGoalCalories] = useState(null);
  const [servingSize, setServingSize] = useState(100); // State for serving size as a number
  const [servings, setServings] = useState(1); // State for servings
  const { remainingCalories, setRemainingCalories } =
    useContext(CalorieContext);

  useEffect(() => {
    fetch("/listOfFood.json")
      .then((response) => response.json())
      .then((data) => setFoodData(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredData([]);
    } else {
      const results = foodData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(results);
    }
  }, [searchTerm, foodData]);

  useEffect(() => {
    console.log("Remaining Calories:", remainingCalories); // Should show 0 initially or updated value
  }, [remainingCalories]);

  useEffect(() => {
    const totalCalories = 1200; // Replace with actual value
    const goalCalories = 1000; // Replace with actual goal
    setRemainingCalories(totalCalories - goalCalories); // Update remaining calories
  }, [setRemainingCalories]);
  console.log("Remaining Calories:", remainingCalories); // Add this in FoodEntryCard

  const handleAddMoreClick = () => setShowDetails(true);
  const handleBackClick = () => setShowDetails(false);
  const handleFoodItemClick = (food) => {
    setSelectedFood(food);
    setSearchTerm("");
    setFilteredData([]);
    setServingSize(100); // Reset serving size to 100g when selecting food
    setServings(1); // Reset servings to 1 when selecting food
  };

  const handleShowForm = () => setShowForm(!showForm);
  const handleBackToFoodEntry = () => {
    setShowForm(false);
    setShowDetails(false);
  };

  const handleResultCalorie = (result) => setGoalCalories(result.goalCalories);

  const renderFoodCard = (foodType) => {
    let calories, name;

    switch (foodType) {
      case FoodType.BREAKFAST:
        calories = 693;
        name = FoodType.BREAKFAST;
        break;
      case FoodType.LUNCH:
        calories = 800;
        name = FoodType.LUNCH;
        break;
      case FoodType.DINNER:
        calories = 650;
        name = FoodType.DINNER;
        break;
      case FoodType.SNACK:
        calories = 200;
        name = FoodType.SNACK;
        break;
      default:
        calories = 0;
        name = "Unknown";
    }

    return (
      <div className={`${foodType.toLowerCase()}-card`}>
        <div className="card-details">
          <h3>{name}</h3>
          <div className="details-calories">
            <span>{calories}</span>
            <p>kcal</p>
          </div>
        </div>
        <div className="button-container">
          <hr className="container-hr-calories" />
          <button className="center-button" onClick={handleAddMoreClick}>
            Add More
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="food-card-container">
      {!showForm && !showDetails ? (
        <>
          <div className="header-card-container">
            <span>Diary today</span>
            <a className="more-link" onClick={handleShowForm}>
              Set Calories
            </a>
          </div>
          <div className="calories-remaining-container">
            <div className="calories-item">
              <span className="total-calories">
                {goalCalories !== null ? Math.ceil(goalCalories) : 0}
              </span>
              <span className="symbol">-</span>
              <div className="calories-target">Goal</div>
            </div>
            <div className="calories-item">
              <span className="total-calories">1200</span>
              <span className="symbol">=</span>
              <div className="calories-target">Food</div>
            </div>
            <div className="calories-item">
              <span className="total-calories">{remainingCalories}</span>
              <div className="calories-target">Remaining</div>
            </div>
          </div>
          {renderFoodCard(FoodType.BREAKFAST)}
          {renderFoodCard(FoodType.LUNCH)}
          {renderFoodCard(FoodType.DINNER)}
          {renderFoodCard(FoodType.SNACK)}
        </>
      ) : showForm ? (
        <GoalSetterComponent
          onResult={handleResultCalorie}
          onBack={handleBackToFoodEntry}
        />
      ) : (
        <div className="details-container">
          <div className="header-card-container">
            <span>Diary today</span>
            <button className="back-button" onClick={handleBackClick}>
              Back
            </button>
          </div>
          <div className="food-input">
            <input
              type="text"
              placeholder="Search food..."
              value={searchTerm}
              className="search-input"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredData.length > 0 && (
              <div className="dropdown">
                {filteredData.map((food) => (
                  <div
                    key={food.id}
                    className="dropdown-item"
                    onClick={() => handleFoodItemClick(food)}
                  >
                    <p>{food.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            {selectedFood && (
              <div className="food-display">
                <div className="food-image">
                  <img src={selectedFood.image} alt={selectedFood.name} />
                </div>
                <p>{selectedFood.name}</p>
                <div className="macronutrienti">
                  <div className="nutrient-items">
                    <div className="nutrient-item">
                      <span className="value">{selectedFood.calories}</span>
                      <span className="label">Calories</span>
                    </div>
                    <div className="nutrient-item">
                      <span className="value">
                        {selectedFood.carbohydrates}
                      </span>
                      <span className="label">Carbs</span>
                    </div>
                    <div className="nutrient-item">
                      <span className="value">{selectedFood.fat}</span>
                      <span className="label">Fat</span>
                    </div>
                    <div className="nutrient-item">
                      <span className="value">{selectedFood.protein}</span>
                      <span className="label">Protein</span>
                    </div>
                  </div>
                </div>
                <div className="food-servings">
                  <div className="serving-input">
                    <span className="serving">Serving size</span>
                    <div className="serving-size">
                      <input
                        type="number"
                        value={servingSize}
                        onChange={(e) => setServingSize(Number(e.target.value))} // Ensure serving size is a number
                        className="serving-size-input"
                      />
                      <span className="serving-value">g</span>
                    </div>
                  </div>
                  <hr />
                  <div className="servings-info">
                    <span>Servings</span>
                    <input
                      type="number"
                      value={servings}
                      onChange={(e) => setServings(Number(e.target.value))} // Ensure servings is a number
                      className="servings-input"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
