import React, { useState, useEffect } from "react";
import FindCharitiesForm from "./FindCharitiesForm";
import "./MainContainer.css";
const { user_key } = require("./utilities/config");

const MainContainer = () => {
    const INITIAL_STATE = {};
    const [charityInfo, setCharityInfo] = useState(INITIAL_STATE);

    useEffect(() => {});

    const findCharity = () => {};

    return (
        <div>
            <h1>Welcome to CharityFinder. We help you help others.</h1>
            <FindCharitiesForm findCharity={findCharity} />
        </div>
    );
};

export default MainContainer;
