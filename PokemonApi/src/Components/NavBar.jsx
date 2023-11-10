import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Register
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/game"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Play
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
