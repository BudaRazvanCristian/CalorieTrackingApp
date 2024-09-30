import "./styling/progressCard.scss";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { navigateTo } from "./NavigationHelper";

export default function ProgressCard() {
  const goTo = navigateTo();

  const handleTrackNowClick = () => {
    goTo("/food-entry"); // Navighează către pagina dorită
  };
  return (
    <div className="progress-card-container">
      <div className="header-card-container">
        <span>Summary</span>
        <a onClick={handleTrackNowClick}>More</a>
      </div>
      <div className="card-content">
        <Gauge
          value={35}
          startAngle={-110}
          endAngle={110}
          sx={{
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: 30,
              transform: "translate(0px, -20px)",
            },
          }}
          text={({ value }) => `${value}`} // You can customize the description here
        />
        <div className="gauge-text">
          <span>Remaining</span>
        </div>
      </div>
    </div>
  );
}
