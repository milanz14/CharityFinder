import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Organization from "./Organization";
import "../styles/Organizations.css";
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

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(
                `http://cors-anywhere.herokuapp.com/${PLEDGE_ORGANIZATIONS_ENDPOINT}?page=${currentPage}`,
                { headers }
            );
            console.log(res.data.results);
            setOrganizationData(res.data.results);
            setTotalCount(res.data.total_count);
        };
        fetchData();
    }, [currentPage]);

    const goForward = () => setCurrentPage((currentPage) => currentPage + 1);
    const goBackward = () => setCurrentPage((currentPage) => currentPage - 1);

    return (
        <div>
            <p>
                Page {currentPage}/{Math.floor(totalCount / 25)}
            </p>

            <button
                onClick={goBackward}
                disabled={currentPage === 1 ? true : false}
                className="icon-back btn btn-primary"
            >
                Previous Page
            </button>
            <button
                onClick={goForward}
                disabled={
                    currentPage === Math.floor(totalCount / 25) ? true : false
                }
                className="icon-forward btn btn-primary"
            >
                Next Page
            </button>
            <Link to="/categories" className="btn btn-warning">
                Narrow it down
            </Link>

            <h4>Pick a Charity Below and Donate. It's that simple.</h4>
            <h4>
                Use the navbar links to search for a specific cause or for a
                charity in a specific location.
            </h4>
            <div className="container">
                {organizationData.map((o) => (
                    <Organization
                        className="container"
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
        </div>
    );
};

export default Organizations;
