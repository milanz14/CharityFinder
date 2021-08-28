import React, { useState, useEffect } from "react";
import axios from "axios";
const {
    pledge_api_key,
    PLEDGE_ORGANIZATIONS_ENDPOINT,
} = require("../utilities/config");

const MainContainer = () => {
    const headers = {
        Authorization: `Bearer ${pledge_api_key}`,
    };

    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(PLEDGE_ORGANIZATIONS_ENDPOINT, {
                headers,
            });
            console.log(res);
        };
        fetchData();
    }, []);

    return (
        <div>
            <div>This is the charity form</div>
        </div>
    );
};

export default MainContainer;
