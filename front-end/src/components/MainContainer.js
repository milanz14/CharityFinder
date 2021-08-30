import React, { useState, useEffect } from "react";
import FindCharitiesForm from "./FindCharitiesForm";
import "../styles/MainContainer.css";
import axios from "axios";

const { user_key, CHARITY_SEARCH_URL } = require("../utilities/config");

const MainContainer = () => {
    const INITIAL_STATE = {
        city: "",
        state: "",
        zipCode: "",
        category: "",
    };
    const [charityInfo, setCharityInfo] = useState(INITIAL_STATE);
    const [hasCharityData, setHasCharityData] = useState(false);

    useEffect(() => {}, []);

    const findCharity = async (city, state, zipCode, category) => {
        setCharityInfo({ city, state, zipCode, category });
        console.log(charityInfo);

        const res = await axios.post(
            `http://cors-anywhere.herokuapp.com/${CHARITY_SEARCH_URL}?user_key=${user_key}&city=miami&state=${charityInfo.state}&zipCode=${charityInfo.zipCode}&category=${charityInfo.category}`
        );

        console.log(res);
    };

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
