// import { useState, useEffect } from "react";
// import "./styling/foodEntryCard.scss";

// export default function FoodEntryCard() {
//   const [showDetails, setShowDetails] = useState(false);
//   const [foodData, setFoodData] = useState([]);
//   const [selectedFood, setSelectedFood] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     fetch("/listOfFood.json", {
//       method: "GET",
//     })
//       .then((response) => response.json())
//       .then((foodData) => {
//         setFoodData(foodData);
//         console.log(foodData);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   useEffect(() => {
//     if (searchTerm === "") {
//       setFilteredData([]);
//     } else {
//       const results = foodData.filter((item) =>
//         item.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredData(results);
//     }
//   }, [searchTerm, foodData]);

//   const handleAddMoreClick = () => {
//     setShowDetails(true);
//   };

//   const handleBackClick = () => {
//     setShowDetails(false);
//   };

//   {
//     /* Update the state with the selected food item */
//   }
//   const handleFoodItemClick = (food) => {
//     setSelectedFood(food);
//     console.log(selectedFood);
//     setSearchTerm("");
//     setFilteredData([]);
//   };

//   return (
//     <div className="food-card-container">
//       {!showDetails ? (
//         <>
//           <div className="header-card-container">
//             <span>Diary today</span>
//             <a className="more-link">More</a> {/* Use className here */}
//           </div>
//           <div className="calories-remaining-container">
//             <div className="calories-item">
//               <span className="total-calories">2300</span>
//               <span className="symbol">-</span>
//               <div className="calories-target">Goal</div>
//             </div>
//             <div className="calories-item">
//               <span className="total-calories">1200</span>
//               <span className="symbol">=</span>
//               <div className="calories-target">Food</div>
//             </div>
//             <div className="calories-item">
//               <span className="total-calories">1100</span>
//               <div className="calories-target">Remaining</div>
//             </div>
//           </div>

//           {/* Breakfast Card */}
//           <div className="breakfast-card">
//             <div className="card-details">
//               <h3>Breakfast</h3>
//               <div className="details-calories">
//                 <span>693</span>
//                 <p>kcal</p>
//               </div>
//             </div>
//             <div className="button-container">
//               <hr className="container-hr-calories" />
//               <button className="center-button" onClick={handleAddMoreClick}>
//                 Add More
//               </button>
//             </div>
//           </div>

//           {/* Lunch Card */}
//           <div className="lunch-card">
//             <div className="card-details">
//               <h3>Lunch</h3>
//               <div className="details-calories">
//                 <span>693</span>
//                 <p>kcal</p>
//               </div>
//             </div>
//             <div className="button-container">
//               <hr className="container-hr-calories" />
//               <button className="center-button" onClick={handleAddMoreClick}>
//                 Add More
//               </button>
//             </div>
//           </div>

//           {/* Dinner Card */}
//           <div className="dinner-card">
//             <div className="card-details">
//               <h3>Dinner</h3>
//               <div className="details-calories">
//                 <span>693</span>
//                 <p>kcal</p>
//               </div>
//             </div>
//             <div className="button-container">
//               <hr className="container-hr-calories" />
//               <button className="center-button" onClick={handleAddMoreClick}>
//                 Add More
//               </button>
//             </div>
//           </div>
//         </>
//       ) : (
//         <div className="details-container">
//           <div className="header-card-container">
//             <span>Diary today</span>
//             <button className="back-button" onClick={handleBackClick}>
//               Back
//             </button>
//           </div>
//           <div className="food-input">
//             <input
//               type="text"
//               placeholder="Search food..."
//               value={searchTerm}
//               className="search-input"
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             {filteredData.length > 0 && (
//               <div className="dropdown">
//                 {filteredData.map((food) => (
//                   <div
//                     key={food.id}
//                     className="dropdown-item"
//                     onClick={() => handleFoodItemClick(food)}
//                   >
//                     <p>{food.name}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//           <div>
//             {selectedFood && (
//               <div className="food-display">
//                 <div className="food-image">
//                   <img
//                     src={selectedFood.image}
//                     alt={selectedFood.name}
//                     style={{
//                       width: "90%",
//                       height: "250px",
//                       objectFit: "cover",
//                       borderRadius: "10px",
//                       padding: "10px",
//                     }}
//                   />
//                 </div>
//                 <p>{selectedFood.name}</p>
//                 <div className="macronutrienti">
//                   <div className="nutrient-item">
//                     <span className="value">{selectedFood.calories}</span>
//                     <span className="label">Calories</span>
//                   </div>
//                   <div className="nutrient-item">
//                     <span className="value">{selectedFood.carbohydrates}</span>
//                     <span className="label">Carbs</span>
//                   </div>
//                   <div className="nutrient-item">
//                     <span className="value">{selectedFood.fat}</span>
//                     <span className="label">Fat</span>
//                   </div>
//                   <div className="nutrient-item">
//                     <span className="value">{selectedFood.protein}</span>
//                     <span className="label">Protein</span>
//                   </div>
//                   <div className="food-servings">
//                     <span className="serving">serving size</span>
//                     <span className="serving-value">100g</span>
//                     <hr></hr>
//                     <span>servings</span>
//                     <span>1</span>
//                     <hr></hr>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import "./styling/foodEntryCard.scss";

// Enum pentru tipurile de mâncare
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

  useEffect(() => {
    fetch("/listOfFood.json", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((foodData) => {
        setFoodData(foodData);
        console.log(foodData);
      })
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

  const handleAddMoreClick = () => {
    setShowDetails(true);
  };

  const handleBackClick = () => {
    setShowDetails(false);
  };

  // Logica pentru selectarea mâncării
  const handleFoodItemClick = (food) => {
    setSelectedFood(food);
    setSearchTerm("");
    setFilteredData([]);
  };

  // Afișarea informațiilor despre mâncare în funcție de tipul selectat
  const renderFoodCard = (foodType) => {
    let calories, imageUrl, name;

    switch (foodType) {
      case FoodType.BREAKFAST:
        calories = 693;
        imageUrl = "https://link-to-breakfast-image.jpg"; // Adaugă URL-ul corect pentru imagine
        name = FoodType.BREAKFAST;
        break;
      case FoodType.LUNCH:
        calories = 800;
        imageUrl = "https://link-to-lunch-image.jpg"; // Adaugă URL-ul corect pentru imagine
        name = FoodType.LUNCH;
        break;
      case FoodType.DINNER:
        calories = 650;
        imageUrl = "https://link-to-dinner-image.jpg"; // Adaugă URL-ul corect pentru imagine
        name = FoodType.DINNER;
        break;
      case FoodType.SNACK:
        calories = 200;
        imageUrl = "https://link-to-dinner-image.jpg"; // Adaugă URL-ul corect pentru imagine
        name = FoodType.SNACK;
        break;
      default:
        calories = 0;
        imageUrl = "";
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
      {!showDetails ? (
        <>
          <div className="header-card-container">
            <span>Diary today</span>
            <a className="more-link">More</a> {/* Folosește className aici */}
          </div>
          <div className="calories-remaining-container">
            <div className="calories-item">
              <span className="total-calories">2300</span>
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

          {/* Carduri pentru fiecare masă */}
          {renderFoodCard(FoodType.BREAKFAST)}
          {renderFoodCard(FoodType.LUNCH)}
          {renderFoodCard(FoodType.DINNER)}
          {renderFoodCard(FoodType.SNACK)}
        </>
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
                    <hr></hr>
                    <span>servings</span>
                    <span>1</span>
                    <hr></hr>
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
