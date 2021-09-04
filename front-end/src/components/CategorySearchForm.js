import React, { useState } from "react";
import "../styles/CategorySearchForm.css";

const CategorySearchForm = ({ getData }) => {
    const INITIAL_STATE = {
        q: "",
        cause_id: null,
        region: "",
        postal_code: "",
    };
    const [formValue, setFormValue] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        setFormValue((formValue) => ({
            ...formValue,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formValue);
        getData(
            formValue.q,
            formValue.cause_id,
            formValue.region,
            formValue.postal_code
        );
        setFormValue(INITIAL_STATE);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="row">
                <div className="mb-3 col-6 center">
                    <label htmlFor="q">Keyword Search</label>
                    <input
                        name="q"
                        id="q"
                        value={formValue.q}
                        className="form-control"
                        onChange={handleChange}
                    ></input>
                </div>
                <div className="mb-3 col-6 center">
                    <label htmlFor="region">Region (2 Letter state code)</label>
                    <input
                        name="region"
                        id="region"
                        value={formValue.region}
                        className="form-control"
                        onChange={handleChange}
                    ></input>
                </div>
                <div className="mb-3 col-6 center">
                    <label htmlFor="postal_code">ZIP Code</label>
                    <input
                        name="postal_code"
                        id="postal_code"
                        value={formValue.postal_code}
                        className="form-control"
                        onChange={handleChange}
                    ></input>
                </div>
                <div className="mb-3 col-6 center">
                    <label htmlFor="cause_id">Cause</label>
                    <select
                        defaultValue=""
                        className="form-select"
                        value={formValue.cause_id}
                        onChange={handleChange}
                        name="cause_id"
                        id="cause_id"
                    >
                        <option value="">--</option>
                        <option value="2">Animals</option>
                        <option value="3">Education</option>
                        <option value="4">Environment</option>
                        <option value="5">Health Care</option>
                        <option value="6">Diseases &amp; Disorders</option>
                        <option value="7">Food &amp; Nutrition</option>
                        <option value="8">Crime &amp; Justice</option>
                        <option value="9">Disaster Relief</option>
                        <option value="10">International</option>
                        <option value="11">
                            Civil Rights &amp; Social Action
                        </option>
                        <option value="12">Mental Health</option>
                        <option value="13">Military &amp; Veterans</option>
                        <option value="14">Arts &amp; Culture</option>
                        <option value="16">Medical Research</option>
                        <option value="17">Employment</option>
                        <option value="18">Housing &amp; Shelter</option>
                        <option value="19">Sports &amp; Recreation</option>
                        <option value="21">Youth Development</option>
                        <option value="22">Human Services</option>
                        <option value="28">Cancer</option>
                        <option value="29">HIV/AIDS</option>
                        <option value="30">Alzheimer's Disease</option>
                        <option value="31">Autism</option>
                        <option value="48">LGBTQIA</option>
                        <option value="49">Humanitarian Assistance</option>
                        <option value="52">Women and Girls</option>
                    </select>
                </div>
            </div>
            <button className="btn btn-secondary">Search</button>
        </form>
    );
};

export default CategorySearchForm;
