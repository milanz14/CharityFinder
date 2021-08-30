import React, { useState, useEffect } from "react";
import FindCharitiesForm from "./FindCharitiesForm";
import Charity from "./Charity";
import "../styles/MainContainer.css";
import axios from "axios";

const { user_key, CHARITY_SEARCH_URL } = require("../utilities/config");

const SearchRouteContainer = () => {
    const INITIAL_STATE = {
        city: "",
        state: "",
        zipCode: "",
        category: "",
    };
    const [charityInfo, setCharityInfo] = useState(INITIAL_STATE);
    const [hasCharityData, setHasCharityData] = useState(false);

    // useEffect(() => {}, []);

    const findCharity = async (city, state, zipCode, category) => {
        const res = await axios.post(
            `http://cors-anywhere.herokuapp.com/${CHARITY_SEARCH_URL}?user_key=${user_key}&city=${city}&state=${state}&zipCode=${zipCode}&category=${category}`
        );
        setCharityInfo(res.data.data);
        setHasCharityData(true);
        console.log(charityInfo);
    };

    return (
        <div>
            {!hasCharityData && (
                <div>
                    <h1>Welcome to CharityFinder. We help you help others.</h1>
                    <FindCharitiesForm findCharity={findCharity} />
                </div>
            )}
            {/* { hasCharityData ? 
                {charityInfo.map((char) => (
                    <Charity category={char.category} />
                ))} : <p></p> } */}
        </div>
    );
};

export default SearchRouteContainer;
