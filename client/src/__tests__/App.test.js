import { render, screen } from "@testing-library/react";
import App from "../components/App";
import React from "react";
import Navbar from "../components/Navbar";
import Routes from "../components/Routes";

test("it renders without crashing", () => {
    render(<App />);
});

test("it matches the snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
});
