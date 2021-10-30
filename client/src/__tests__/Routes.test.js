import React from "react";
import { render } from "@testing-library/react";
import Routes from "../components/Routes";
import { BrowserRouter } from "react-router-dom";

// props: Home, Organizations, CategorySearch

test("It renders without crashing", () => {
    render(
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    );
});

test("it matches the snapshot", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});
