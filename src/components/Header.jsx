import "./styling/header.scss";
import { navigateTo } from "./NavigationHelper";

export default function Header() {
  const goTo = navigateTo();
  const handleTrackNowClick = () => {
    goTo("/food-entry");
  };

  return (
    <div className="container-text">
      <h1>
        Calorie <br />
        Counter
      </h1>
      <div className="text-description">
        <p>Manage Your Daily Food,</p>
        <p>Track Your Activities</p>
        <p>And Lose Weight Successfully</p>
        <button className="track-button" onClick={handleTrackNowClick}>
          Track now! <img src="/arrow-right-solid.svg" alt="Arrow Right" />
        </button>
      </div>
      <hr className="container-hr" />
      <div className="container-reviews">
        <div className="review-item">
          <span className="review-count">4 mln +</span>
          <div className="review-label">people</div>
        </div>
        <div className="review-item">
          <span className="review-count">2000 +</span>
          <div className="review-label">recipes</div>
        </div>
        <div className="review-item">
          <span className="review-count">34 000 +</span>
          <div className="review-label">reviews</div>
        </div>
      </div>
    </div>
  );
}
