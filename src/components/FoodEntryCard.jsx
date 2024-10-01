import "./styling/foodEntryCard.scss";

export default function FoodEntryCard() {
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
