import React, { useState } from "react";

const FindCharitiesForm = ({ findCharity }) => {
    const INITIAL_STATE = {
        city: "",
        state: "",
        zipCode: "",
        category: "",
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        findCharity(
            formData.city,
            formData.state,
            formData.zipCode,
            formData.category
        );
        // setFormData(INITIAL_STATE);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h4>
                    Search for a charity. Fill out as much information as you
                    can. We'll do the rest.
                </h4>
                <div>
                    <label htmlFor="city">City: </label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="state">
                        State (Two Letter Abbreviation):{" "}
                    </label>
                    <input
                        type="text"
                        name="state"
                        id="state"
                        value={formData.state}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="zipCode">Zip Code: </label>
                    <input
                        type="text"
                        name="zipCode"
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="category">Category: </label>
                    <input
                        type="text"
                        name="category"
                        id="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button>Search... </button>
                </div>
            </form>
        </div>
    );
};

export default FindCharitiesForm;
