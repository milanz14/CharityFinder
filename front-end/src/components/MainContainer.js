import React, { useState, useEffect } from "react";
import axios from "axios";
const {
    pledge_api_key,
    PLEDGE_ORGANIZATIONS_ENDPOINT,
    user_key,
    CATEGORY_SEARCH_URL,
} = require("../utilities/config");

const MainContainer = () => {
    const headers = {
        Authorization: `Bearer ${pledge_api_key}`,
    };

    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(
                `http://cors-anywhere.herokuapp.com/${PLEDGE_ORGANIZATIONS_ENDPOINT}`,
                {
                    headers,
                }
            );
            console.log(res.data);
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
