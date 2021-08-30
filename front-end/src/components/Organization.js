import React from "react";
// const { PLEDGE_ORGANIZATIONS_ENDPOINT } = require("../utilities/config");

const Organization = ({ id, name, city, zip, url, street, state }) => {
    return (
        <div>
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
                    {/* <a
                        href={`http://cors-anywhere.herokuapp.com/${PLEDGE_ORGANIZATIONS_ENDPOINT}/${id}`}
                    >
                        More Info
                    </a> */}
                    <button onClick={() => window.open(url)}>Donate</button>
                </div>
            </div>
        </div>
    );
};

export default Organization;
