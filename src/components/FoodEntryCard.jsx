import "./styling/foodEntryCard.scss";
import { useState, useEffect } from "react";

export default function FoodEntryCard() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("public/listOfFood.json", {
      method: "GET",
    })
      .then((response) => response.json()) // Transformă răspunsul în format JSON
      .then((data) => {
        setData(data); // Setează starea cu datele primite
        console.log(data); // Opțional: Verifică datele în consola browserului
      })
      .catch((error) => console.log(error)); // Afișează erorile, dacă există
  };

  useEffect(() => {
    getData(); // Apelează funcția de fetch la montarea componentului
  }, []);

  return (
    <div className="food-card-container">
      <div className="header-card-container">
        <span>Diary today</span>
        <a>More</a>
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
          <span className="total-calories">1100 </span>
          <div className="calories-target">Remaining</div>
        </div>
      </div>
      <div className="breakfast-card">
        <div className="card-details">
          <h3>breakfast</h3>
          <div className="details-calories">
            <span>693 </span>
            <p>kcal</p>
          </div>
        </div>
        <div className="button-container">
          <hr className="container-hr-calories" />
          <button className="center-button">Add More</button>
        </div>
        {/* <div className="foodFetch">
          <ul>
            {data.map((food) => (
              <div key={food.id} className="foodItem">
                <div className="foodDetails">
                  <img src={food.image} alt={food.name} width="100" />
                  <div className="foodInfo">
                    <h3>{food.name}</h3>
                    <p>{food.calories}</p>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div> */}
      </div>
      <div className="lunch-card">
        <div className="card-details">
          <h3>lunch</h3>
          <div className="details-calories">
            <span>800 </span>
            <p>kcal</p>
          </div>
        </div>
        <div className="button-container">
          <hr className="container-hr-calories" />
          <button className="center-button">Add More</button>
        </div>
      </div>
      <div className="dinner-card">
        <div className="card-details">
          <h3>dinner</h3>
          <div className="details-calories">
            <span>200 </span>
            <p>kcal</p>
          </div>
        </div>
        <div className="button-container">
          <hr className="container-hr-calories" />
          <button className="center-button">Add More</button>
        </div>
      </div>
    </div>
  );
}
