import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";
const NavBar = () => {
  return (
    <nav>
      <ul className="ul">
        <li>
          <Link to="/" className="lists">
            Home
          </Link>
        </li>
        <li>
          <Link to="login" className="lists">
            Login
          </Link>
        </li>
        <li>
          <NavLink
            to="register"
            className={({ isActive }) =>
              isActive ? "lists activeNavLink" : "lists"
            }
          >
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
