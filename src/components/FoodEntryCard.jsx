import { useState, useEffect, useContext } from "react";
import "./styling/foodEntryCard.scss";
import "./styling/goalSetter.scss";
import GoalSetterComponent from "./GoalSetterComponent";
import { CalorieContext } from "./Contexts/CalorieContext";
import { RemainingCalorieContext } from "./Contexts/RemainingCalorieContext";

const FoodType = {
  BREAKFAST: "Breakfast",
  LUNCH: "Lunch",
  DINNER: "Dinner",
  SNACK: "Snack",
};

export default function FoodEntryCard() {
  // State variables
  const [showDetails, setShowDetails] = useState(false);
  const [foodData, setFoodData] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [goalCalories, setGoalCalories] = useState(null);
  const [servingSize, setServingSize] = useState(100);
  const [servings, setServings] = useState(1);
  const [addedFoods, setAddedFoods] = useState([]);

  const { remainingCalories, setRemainingCalories } =
    useContext(CalorieContext);
  const { remainingCaloriesMeals, setRemainingCaloriesMeals } = useContext(
    RemainingCalorieContext
  );

  // Fetch food data
  useEffect(() => {
    fetch("/listOfFood.json")
      .then((response) => response.json())
      .then((data) => setFoodData(data))
      .catch((error) => console.log(error));
  }, []);

  // Filter food data based on search term
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

  // Update remaining calories and goal calories
  useEffect(() => {
    const totalCalories = addedFoods.reduce(
      (acc, food) => acc + food.calories,
      0
    );
    const effectiveGoalCalories = goalCalories !== null ? goalCalories : 0;
    Math.ceil(setRemainingCalories(effectiveGoalCalories - totalCalories));
  }, [addedFoods, goalCalories, setRemainingCalories]);

  // Event handlers
  const handleAddMoreClick = () => setShowDetails(true);
  const handleBackClick = () => setShowDetails(false);
  const handleFoodItemClick = (food) => {
    setSelectedFood(food);
    setSearchTerm("");
    setFilteredData([]);
    setServingSize(100);
    setServings(1);
  };
  const handleShowForm = () => setShowForm(!showForm);
  const handleBackToFoodEntry = () => {
    setShowForm(false);
    setShowDetails(false);
  };
  const handleAddFood = (mealType) => {
    if (selectedFood) {
      const foodToAdd = {
        name: selectedFood.name,
        calories: selectedFood.calories * (servingSize / 100) * servings,
        servingSize: servingSize,
        servings: servings,
        type: mealType,
      };
      setAddedFoods((prevFoods) => [...prevFoods, foodToAdd]);
      setRemainingCaloriesMeals((prev) => ({
        ...prev,
        [mealType]: (prev[mealType] || 0) + foodToAdd.calories,
      }));
    }
  };
  const handleDeleteFood = (index, mealType) => {
    setAddedFoods((prevFoods) => {
      const updatedFoods = prevFoods.filter((_, i) => i !== index);
      const deletedFoodCalories = prevFoods[index].calories;
      setRemainingCaloriesMeals((prev) => ({
        ...prev,
        [mealType]: prev[mealType] - deletedFoodCalories,
      }));
      return updatedFoods;
    });
  };

  // Render food card for each meal type
  const renderFoodCard = (foodType) => {
    const foodsForType = addedFoods.filter((food) => food.type === foodType);
    const calories = remainingCaloriesMeals[foodType] || 0;

    return (
      <div className={`${foodType.toLowerCase()}-card`}>
        <div className="card-details">
          <h3>{foodType}</h3>
          <div className="details-calories">
            <span>{calories}</span>
            <p>kcal</p>
          </div>
        </div>
        <div className="button-container">
          <hr className="container-hr-calories" />
          <button
            className="center-button"
            onClick={() => handleAddMoreClick()}
          >
            Add More
          </button>
        </div>
        <div className="added-foods">
          {foodsForType.length > 0 ? (
            foodsForType.map((food, index) => (
              <div key={index} className="food-item">
                <h4>{food.name}</h4>
                <div className="calorie-and-button">
                  <p>{food.calories} Calories</p>
                  <button onClick={() => handleDeleteFood(index, foodType)}>
                    X
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No foods added yet</p>
          )}
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
              <span className="total-calories">
                {addedFoods.reduce((acc, food) => acc + food.calories, 0)}
              </span>
              <span className="symbol">=</span>
              <div className="calories-target">Food</div>
            </div>
            <div className="calories-item">
              <span className="total-calories">
                {Math.ceil(remainingCalories)}
              </span>
              <div className="calories-target">Remaining</div>
            </div>
          </div>

          {Object.values(FoodType).map((foodType) => renderFoodCard(foodType))}
        </>
      ) : showForm ? (
        <GoalSetterComponent
          onResult={(result) => setGoalCalories(result.goalCalories)} // Set goalCalories from result
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
                <div className="food-name-button">
                  <p>{selectedFood.name}</p>
                  <select
                    value={selectedFood.mealType}
                    onChange={(e) =>
                      setSelectedFood({
                        ...selectedFood,
                        mealType: e.target.value,
                      })
                    }
                  >
                    <option value="" disabled>
                      Select Meal Type
                    </option>
                    <option value={FoodType.BREAKFAST}>Breakfast</option>
                    <option value={FoodType.LUNCH}>Lunch</option>
                    <option value={FoodType.DINNER}>Dinner</option>
                    <option value={FoodType.SNACK}>Snack</option>
                  </select>
                  <button onClick={() => handleAddFood(selectedFood.mealType)}>
                    Add to Meal
                  </button>
                </div>
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
                <div className="servings-container">
                  <div className="serving-size">
                    <label htmlFor="serving-size">Serving Size (g):</label>
                    <input
                      type="number"
                      id="serving-size"
                      value={servingSize}
                      onChange={(e) => setServingSize(Number(e.target.value))}
                      className="serving-input"
                    />
                  </div>
                  <div className="servings-info">
                    <label htmlFor="servings">Servings:</label>
                    <input
                      type="number"
                      id="servings"
                      value={servings}
                      onChange={(e) => setServings(Number(e.target.value))}
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
