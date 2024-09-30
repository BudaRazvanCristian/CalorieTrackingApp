import "./styling/measurementsCard.scss";
// import LinearDeterminate from "./LinearProgress";

export default function MeasurementsCard() {
  return (
    <div className="measurement-card-container">
      <div className="header-card-container">
        <span>Measurements</span>
        <a>More</a>
      </div>
      <div className="card-content">
        <h3>Weight</h3>
        <div className="content-kg-setter">
          <button>-</button>
          <p>54,5 kg</p>
          <button>+</button>
        </div>
        <hr className="container-hr-measurements" />

        <div className="weight-goal-section">
          <div className="weight-details">
            <span className="current-weight-label">Current Weight</span>
            <span className="goal-weight-label">Goal Weight</span>
          </div>
          <div className="weight-values">
            <p className="current-weight-value">54.5 kg</p>
            <p className="goal-weight-value">70 kg</p>
            {/* <LinearDeterminate /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
