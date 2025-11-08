import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "./assets/images/Logo-VidushiInfotech.png";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="img-fluid" src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* <Link className="nav-link" to="/">Home</Link> */}
              <NavLink
                to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Home</NavLink>
            </li>
            <li className="nav-item">
              {/*<Link className="nav-link" to="/Services">
                Services
              </Link>*/}

              <NavLink
                to="/Services" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Contact Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/signUp" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Sign Up</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;