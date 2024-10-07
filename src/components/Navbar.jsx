import "./styling/navbar.scss";
import { navigateTo } from "./NavigationHelper";

export default function Navbar() {
  const goTo = navigateTo();

  const handleTrackNowClick = () => {
    goTo("/"); // Navigate to the home page
  };

  const handleProClick = () => {
    goTo("/plan"); // Navigate to the PRO page
  };

  const handleAboutClick = () => {
    goTo("/about"); // Navigate to the PRO page
  };
  return (
    <nav className="navbar">
      <div className="navbar-name" onClick={handleTrackNowClick}>
        MIVO
      </div>
      <ul className="navbar-links">
        <li>
          <a onClick={handleTrackNowClick}>Home</a>
        </li>
        <li>
          <a onClick={handleAboutClick}>About</a>
        </li>
        <li>
          <a href="#services">Contact</a>
        </li>
        <li>
          <a className="hand-circle" onClick={handleProClick}>
            PRO
          </a>
        </li>
      </ul>
    </nav>
  );
}
