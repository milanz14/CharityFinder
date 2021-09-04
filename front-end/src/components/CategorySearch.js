import React, { useState, useEffect } from "react";
import CategorySearchForm from "./CategorySearchForm";
import Organization from "./Organization";
import "../styles/CategorySearch.css";
import axios from "axios";

const {
    pledge_api_key,
    PLEDGE_ORGANIZATIONS_ENDPOINT,
} = require("../utilities/config");

const CategorySearch = () => {
    const headers = {
        Authorization: `Bearer ${pledge_api_key}`,
    };

    const INITIAL_STATE = [];
    const [organizationData, setOrganizationData] = useState(INITIAL_STATE);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [payload, setPayload] = useState({});
    const [hasPayloadData, setHasPayloadData] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(
                `http://cors-anywhere.herokuapp.com/${PLEDGE_ORGANIZATIONS_ENDPOINT}?q=${payload.q}&region=${payload.region}&cause_id=${payload.cause_id}&postal_code=${payload.postal_code}&page=${currentPage}`,
                { headers }
            );
            console.log(payload.cause_id);
            console.log(payload.region);
            console.log(res);
            console.log(res.data.results);
            console.log(payload);
            setOrganizationData(res.data.results);
            setTotalCount(res.data.total_count);
        };
        fetchData();
    }, [currentPage, payload]);

    const getData = (q, cause_id, region, postal_code) => {
        setPayload({});
        setPayload({ ...payload, q, cause_id, region, postal_code });
        setHasPayloadData(true);
    };

    return (
        <div className="category-search">
            <h4 className="category-search-title">
                Enter as much information as you can below and submit. We'll do
                the rest.
            </h4>
            <CategorySearchForm getData={getData} />
            {!hasPayloadData && (
                <div>
                    Nothing meets your criteria. Try narrowing down your search
                    a bit more.
                </div>
            )}
            {hasPayloadData && (
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
            )}
        </div>
    );
};

export default CategorySearch;
