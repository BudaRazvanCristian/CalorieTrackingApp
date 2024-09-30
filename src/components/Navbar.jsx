import "./styling/navbar.scss";
import { navigateTo } from "./NavigationHelper";

export default function Navbar() {
  const goTo = navigateTo();

  const handleTrackNowClick = () => {
    goTo("/"); // Navighează către pagina dorită
  };
  return (
    <nav className="navbar">
      <div className="navbar-name" onClick={handleTrackNowClick}>
        MIVO
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home" onClick={handleTrackNowClick}>
            Home
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Contact</a>
        </li>
        <li>
          <a className="hand-circle" href="#pro">
            PRO
          </a>
        </li>
      </ul>
    </nav>
  );
}
