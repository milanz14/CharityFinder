import React, { useState, useEffect } from "react";
import Organization from "./Organization";
import axios from "axios";

const {
    pledge_api_key,
    PLEDGE_ORGANIZATIONS_ENDPOINT,
} = require("../utilities/config");

const Organizations = () => {
    const headers = {
        Authorization: `Bearer ${pledge_api_key}`,
    };

    const [organizationData, setOrganizationData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(
                `http://cors-anywhere.herokuapp.com/${PLEDGE_ORGANIZATIONS_ENDPOINT}`,
                { headers }
            );
            console.log(res.data);
            setOrganizationData(res.data.results);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Data for Organizations...</h2>
            {organizationData.map((o) => (
                <Organization
                    key={o.id}
                    name={o.name}
                    city={o.city}
                    zip={o.postal_code}
                    url={o.profile_url}
                    street={o.street1}
                    state={o.region}
                />
            ))}
        </div>
    );
};

export default Organizations;
