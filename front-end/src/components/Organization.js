import React from "react";

const Organization = ({ id, name, city, zip, url, street, state }) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        {street}
                        {", "}
                        {state}
                        {", "}
                        {zip}
                    </p>
                    <button onClick={() => window.open(url)}>Donate</button>
                </div>
            </div>
        </div>
    );
};

export default Organization;
