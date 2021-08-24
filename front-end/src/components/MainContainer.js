import React, { useState, useEffect } from "react";
import FindCharitiesForm from "./FindCharitiesForm";
import axios from "axios";
import "../styles/MainContainer.css";
const { user_key, CHARITY_SEARCH_URL } = require("../utilities/config");

const MainContainer = () => {
    const [charityInfo, setCharityInfo] = useState({});
    const [hasCharityData, setHasCharityData] = useState(false);

    useEffect(() => {
        fetch(charityInfo);
    }, [charityInfo]);

    const findCharity = (city, state, zipCode, category) => {
        setCharityInfo({
            city,
            state,
            zipCode,
            category,
        });
        console.log(charityInfo);
        // fetch(charityInfo);
    };

    const fetch = (data) => {
        axios
            .post(
                `${CHARITY_SEARCH_URL}?user_key=${user_key}&city=${data.city}`,
                data
            )
            .then((resp) => {
                console.log(resp.data.city);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            {!hasCharityData && (
                <div>
                    <h1>Welcome to CharityFinder. We help you help others.</h1>
                    <FindCharitiesForm findCharity={findCharity} />
                </div>
            )}
            {/* <div>{charityInfo.map((c) => ({ c }))}</div> */}
        </div>
    );
};

export default MainContainer;
