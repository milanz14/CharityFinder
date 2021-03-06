import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
    return (
        <div className="home">
            <h1 className="home-title">Feeling Charitable?</h1>
            <Link to="/organizations" className="home-btn" data-testid="button">
                Let's Get Started
            </Link>
        </div>
    );
};

export default Home;
