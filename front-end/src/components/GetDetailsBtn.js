import React from "react";
import { pledge_api_key } from "../utilities/config";

const GetDetailsBtn = ({ id }) => {
    const headers = {
        Authorization: `Bearer ${pledge_api_key}`,
    };
    const fetchData = async () => {};

    return <button onClick={fetchData}>Charity Details</button>;
};

export default GetDetailsBtn;
