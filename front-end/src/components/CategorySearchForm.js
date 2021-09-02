import React, { useState } from "react";

const CategorySearchForm = () => {
    const [formValue, setFormValue] = useState();

    const handleChange = (e) => {
        setFormValue(e.target.value);
        console.log(formValue);
    };

    const handleClick = (e) => {
        console.log(formValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className="form">
            <select
                className="form-select"
                value={formValue}
                onChange={handleChange}
            >
                <option value="2">Animals</option>
                <option value="3">Education</option>
                <option value="4">Environment</option>
                <option value="5">Health Care</option>
                <option value="6">Diseases &amp; Disorders</option>
                <option value="7">Food &amp; Nutrition</option>
                <option value="8">Crime &amp; Justice</option>
                <option value="9">Disaster Relief</option>
                <option value="10">International</option>
                <option value="11">Civil Rights &amp; Social Action</option>
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
            <button onClick={handleClick} className="btn btn-secondary">
                Search
            </button>
        </form>
    );
};

export default CategorySearchForm;
