import { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/svg-2.svg";
import "./navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__logo">
            <img src={logo} alt="Logo" className="navbar__logo-image" />
          </Link>
          <ul className="navbar__menu">
            <li>
              <a href="/home" className="navbar__link">
                For You
              </a>
            </li>
            <li>
              <a href="/series/1 " className="navbar__link">
                Movies
              </a>
            </li>
            <li>
              <a href="/home" className="navbar__link">
                TV Shows
              </a>
            </li>
          </ul>
          <input
            className="navbar__input"
            type="text"
            placeholder="Buscar... "
          ></input>
          <img
            className="navbar__avatar"
            src="https://ui-avatars.com/api/?name=Jon+Snow&background=0D8ABC&color=fff&size=50"
            alt="Avatar"
          />
        </div>
      </nav>
    );
  }
}

export default Navbar;
