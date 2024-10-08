import { useState } from "react";
import { useContext } from "react";
import { WeightContext } from "./WeightContext";
import "./styling/measurementsCard.scss";

export default function MeasurementsCard() {
  const [kgMeasure, setKgMeasure] = useState(60);
  const { currWeight } = useContext(WeightContext);

  const handlePlusButton = () => {
    setKgMeasure(kgMeasure + 1);
  };
  const handleMinusButton = () => {
    if (kgMeasure > 0) setKgMeasure(kgMeasure - 1);
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
          <p>{kgMeasure} kg</p>
          <button onClick={handlePlusButton}>+</button>
        </div>
        <hr className="container-hr-measurements" />

        <div className="weight-goal-section">
          <div className="weight-details">
            <span className="current-weight-label">Current Weight</span>
            <span className="goal-weight-label">Goal Weight</span>
          </div>
          <div className="weight-values">
            <p className="current-weight-value">{currWeight} kg</p>
            <p className="goal-weight-value">70 kg</p>
          </div>
        </div>
      </div>
    </div>
  );
}
