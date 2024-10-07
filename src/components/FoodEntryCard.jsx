import { useState, useEffect } from "react";
import "./styling/foodEntryCard.scss";
import GoalSetterComponent from "./GoalSetterComponent";
import "./styling/goalSetter.scss";

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

  const handleAddMoreClick = () => setShowDetails(true);
  const handleBackClick = () => setShowDetails(false);
  const handleFoodItemClick = (food) => {
    setSelectedFood(food);
    setSearchTerm("");
    setFilteredData([]);
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
              <span className="total-calories">1100</span>
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
          onBack={handleBackToFoodEntry} // Add the back handler here
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
                  <img
                    src={selectedFood.image}
                    alt={selectedFood.name}
                    style={{
                      width: "90%",
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                  />
                </div>
                <p>{selectedFood.name}</p>
                <div className="macronutrienti">
                  <div className="nutrient-item">
                    <span className="value">{selectedFood.calories}</span>
                    <span className="label">Calories</span>
                  </div>
                  <div className="nutrient-item">
                    <span className="value">{selectedFood.carbohydrates}</span>
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
                  <div className="food-servings">
                    <span className="serving">serving size</span>
                    <span className="serving-value">100g</span>
                    <hr />
                    <span>servings</span>
                    <span>1</span>
                    <hr />
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
