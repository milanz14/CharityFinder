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
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(
                `http://cors-anywhere.herokuapp.com/${PLEDGE_ORGANIZATIONS_ENDPOINT}?page=${currentPage}`,
                { headers }
            );
            console.log(res.data);
            setOrganizationData(res.data.results);
            setTotalCount(res.data.total_count);
        };
        fetchData();
        if (!organizationData) {
            setIsLoading(true);
        }
    }, [currentPage]);

    const goForward = () => setCurrentPage((currentPage) => currentPage + 1);
    const goBackward = () => setCurrentPage((currentPage) => currentPage - 1);

    return (
        <div>
            <p>
                Page {currentPage}/{Math.floor(totalCount / 25)}
            </p>
            {currentPage > 0 && (
                <button onClick={goBackward}>Previous Page</button>
            )}
            {currentPage < Math.floor(totalCount / 25) && (
                <button onClick={goForward}>Next Page</button>
            )}

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
