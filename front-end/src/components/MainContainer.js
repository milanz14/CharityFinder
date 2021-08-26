import React, { useState, useEffect } from "react";
import axios from "axios";
const {
    pledge_api_key,
    PLEDGE_ORGANIZATIONS_ENDPOINT,
} = require("../utilities/config");

const MainContainer = () => {
    const headers = {
        Accept: "application/json",
        Authorization: `Bearer ${pledge_api_key}`,
    };

    const [data, setData] = useState({});

    useEffect(() => {
        fetch();
    }, []);

    const fetch = () => {
        axios
            .get(PLEDGE_ORGANIZATIONS_ENDPOINT, { headers })
            .then((resp) => console.log(resp))
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <div>This is the charity form</div>
        </div>
    );
};

export default MainContainer;
