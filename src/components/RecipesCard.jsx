import "./styling/recipesCard.scss";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import GrassOutlinedIcon from "@mui/icons-material/GrassOutlined";
import KebabDiningOutlinedIcon from "@mui/icons-material/KebabDiningOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";

export default function RecipesCard() {
  return (
    <div className="recipes-card-container">
      <div className="header-card-container">
        <span>Recipes</span>
        <a>
          <button class="pro-button">
            Unlock PRO ! <img src="/arrow-right-solid.svg" alt="Arrow Right" />
          </button>
        </a>
      </div>
      <div className="card-content">
        <section className="content-nutrition">
          <div className="meal">
            <EggAltOutlinedIcon />
            <span>Breakfast, Lunch, Dinner</span>
          </div>
          <hr className="container-hr" />
          <div className="meal">
            <span className="icons">
              <KebabDiningOutlinedIcon />
            </span>
            <span>High Protein</span>
          </div>
          <hr className="container-hr" />
          <div className="meal">
            <span className="icons">
              <FontAwesomeIcon icon={faAppleWhole} />
            </span>
            <span>Low Carb, Low Calorie</span>
          </div>
          <hr className="container-hr" />
          <div className="meal">
            <span className="icons">
              <GrassOutlinedIcon />
            </span>
            <span>Vegetarian</span>
          </div>
          <hr className="container-hr" />
        </section>
      </div>
    </div>
  );
}
