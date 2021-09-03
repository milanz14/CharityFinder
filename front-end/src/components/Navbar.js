import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <div>
            <nav className="Navbar">
                <NavLink exact className="nav-link" to="/">
                    Home
                </NavLink>
                <NavLink exact className="nav-link" to="/organizations">
                    All Organizations
                </NavLink>
                <NavLink exact className="nav-link" to="/categories">
                    Search
                </NavLink>
                <NavLink exact className="nav-link" to="/register">
                    Register
                </NavLink>
            </nav>
        </div>
    );
};

export default Navbar;
