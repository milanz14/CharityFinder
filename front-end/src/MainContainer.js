import React, { useState, useEffect } from "react";
import FindCharitiesForm from "./FindCharitiesForm";
import "./MainContainer.css";
const { user_key } = require("./utilities/config");

const MainContainer = () => {
    const INITIAL_STATE = {};
    const [charityInfo, setCharityInfo] = useState(INITIAL_STATE);

    useEffect(() => {});

    return (
        <div>
            <h1>Find your favorite charity by filling out some information.</h1>
            <h3>Your results will be shown below.</h3>
            <FindCharitiesForm />
        </div>
    );
};

export default MainContainer;
