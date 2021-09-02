import React from "react";
import "../styles/Home.css";

const Home = () => {
    return (
        <div className="home">
            <h1 className="home-title">Feeling Charitable?</h1>
            <a href="/organizations" className="home-btn">
                Let's Get Started
            </a>
        </div>
    );
};

export default Home;
