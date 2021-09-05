import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

jest.mock("../components/CategorySearch", () => ({
    navigate: jest.fn(),
}));

test("it renders without crashing", () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );
});

test("it matches the Navbar snapshot", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
});

// test("it should navigate from Page A to Page B", () => {
//     const { getByText } = render(
//         <BrowserRouter>
//             <Home />
//         </BrowserRouter>
//     );
//     fireEvent.click(screen.getByText("Search"));
//     expect(navigate).toHaveBeenCalledTimes(1);
//     expect(navigate).toHaveBeenCalledWith("/categories");
// });
