import React from "react";
import GetDetailsBtn from "./GetDetailsBtn";
import "../styles/Organization.css";

const Organization = ({ id, name, city, zip, url, street, state }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    {street}
                    {", "}
                    {city}
                    {", "}
                    {state}
                    {", "}
                    {zip}
                </p>
                {/* look at adding in a Modal here to open when you click on a specific organization's details */}
                {/* <GetDetailsBtn id={id} /> */}
                <button onClick={() => window.open(url)}>Donate!</button>
            </div>
        </div>
    );
};

export default Organization;
