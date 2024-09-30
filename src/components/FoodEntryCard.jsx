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
    </div>
  );
}
