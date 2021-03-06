import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Organizations from "../components/Organizations";

test("it renders without crashing", () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );
});

test("it should match snapshot", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

// test("the button click should work", () => {
//     const { getByTestId } = render(<Home />);
//     const btn = getByTestId("button");
//     fireEvent.click(btn);
//     const { getByText } = render(<Organizations />);
//     expect(
//         getByText("Pick a Charity Below and Donate. It's that simple.")
//     ).toBeInTheDocument();
// });
