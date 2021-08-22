import React, { useState, useEffect } from "react";
import FindCharitiesForm from "./FindCharitiesForm";
import "../styles/MainContainer.css";
const { user_key } = require("../utilities/config");

const MainContainer = () => {
    const INITIAL_STATE = {};
    const [charityInfo, setCharityInfo] = useState(INITIAL_STATE);
    const [hasCharityData, setHasCharityData] = useState(false);

    useEffect(() => {});

    const findCharity = () => {};

    return (
        <div>
            {!hasCharityData && (
                <div>
                    <h1>Welcome to CharityFinder. We help you help others.</h1>
                    <FindCharitiesForm findCharity={findCharity} />
                </div>
            )}
        </div>
    );
};

export default MainContainer;
