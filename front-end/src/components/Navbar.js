import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <div>
            <nav className="Navbar">
                <NavLink
                    exact
                    className="nav-link"
                    activeClassName="Navbar-active"
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    exact
                    activeClassName="Navbar-active"
                    to="/organizations"
                >
                    Organizations
                </NavLink>
                <NavLink
                    exact
                    className="nav-link"
                    activeClassName="Navbar-active"
                    to="/categories"
                >
                    Category Search
                </NavLink>
                <NavLink
                    exact
                    className="nav-link"
                    activeClassName="Navbar-active"
                    to="/locations"
                >
                    Location Seach
                </NavLink>
                <NavLink
                    exact
                    className="nav-link"
                    activeClassName="Navbar-active"
                    to="/register"
                >
                    Register
                </NavLink>
            </nav>
        </div>
    );
};

export default Navbar;
