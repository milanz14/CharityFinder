import React from "react";

const Charity = ({ category }) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{category}</h5>
                    <p className="card-text"></p>
                    {/* <button onClick={() => window.open(url)}>Donate</button> */}
                </div>
            </div>
        </div>
    );
};

export default Charity;
