import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import "./styles/NavBar.css";
import { removeToken } from "../utils/token";
import { useContext } from "react";
import ApiContext from "../contexts/ApiContext";

function NavBar() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(ApiContext);

  function signOut() {
    removeToken();
    navigate("/login");
    setIsLoggedIn(false);
  }
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Logo />
      </div>
      <ul className="navbar__nav">
        <li>
          <NavLink to="/ducks" className="navbar__link">
            Patos
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-profile" className="navbar__link">
            Mi perfil
          </NavLink>
        </li>
        <li>
          <button className="navbar__link navbar__button" onClick={signOut}>
            Cerrar sesión
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
