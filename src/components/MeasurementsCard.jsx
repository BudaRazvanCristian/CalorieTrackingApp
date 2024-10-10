import { useContext } from "react";
import { WeightContext } from "./Contexts/WeightContext";
import "./styling/measurementsCard.scss";

export default function MeasurementsCard() {
  const { weight, setWeight, goalWeight } = useContext(WeightContext);

  const handlePlusButton = () => {
    setWeight(weight + 1);
  };
  const handleMinusButton = () => {
    if (weight > 0) setWeight(weight - 1);
  };

  return (
    <div className="measurement-card-container">
      <div className="header-card-container">
        <span>Measurements</span>
        <a>More</a>
      </div>
      <div className="card-content">
        <h3>Weight</h3>
        <div className="content-kg-setter">
          <button onClick={handleMinusButton}>-</button>
          <p>{weight} kg</p>
          <button onClick={handlePlusButton}>+</button>
        </div>
        <hr className="container-hr-measurements" />

        <div className="weight-goal-section">
          <div className="weight-details">
            <span className="current-weight-label">Current Weight</span>
            <span className="goal-weight-label">Goal Weight</span>
          </div>
          <div className="weight-values">
            <p className="current-weight-value">{weight} kg</p>
            <p className="goal-weight-value">{goalWeight} kg</p>
          </div>
        </div>
      </div>
    </div>
  );
}
