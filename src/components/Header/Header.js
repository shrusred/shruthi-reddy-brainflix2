import { useNavigate, Link } from "react-router-dom";
import "../Header/Header.css";
import brainflixlogo from "../../assets/Logo/BrainFlix-logo.svg";

function Header() {
  let navigate = useNavigate();
  function handleNav() {
    navigate("/videos/84e96018-4022-434e-80bf-000ce4cd12b8");
  }
  return (
    <header className="header">
      <img
        className="header__logo"
        src={brainflixlogo}
        alt="brainflixlogo"
        onClick={handleNav}
      ></img>
    </header>
  );
}
export default Header;
