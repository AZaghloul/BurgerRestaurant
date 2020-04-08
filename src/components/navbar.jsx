import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ count }) => {
  //   const { count } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1">Abo Ali</span>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/menu">
              Menu
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/cart">
              Shopping Cart
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/contactus">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav mr-4">
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>

      <Link to="/cart">
        <span
          className={
            count === 0 ? "badge badge-warning" : "badge badge-primary"
          }
        >
          <i className="fas fa-cart-plus"></i>
          {" " + count}
        </span>
      </Link>
    </nav>
  );
};

export default NavBar;
