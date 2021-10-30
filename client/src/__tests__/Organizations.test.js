import React from "react";
import { render, screen } from "@testing-library/react";
import Organizations from "../components/Organizations";
// import Organization from "../components/Organization";

const res = [
    {
        id: 12345,
        name: "Mock Charity",
        postal_code: 12345,
        region: "ON",
        street1: "12345 Fake Street",
    },
];

jest.mock("../components/Organization", () => () => (
    <div data-testid="organization-data" />
));

test("it should render without crashing", () => {
    render(<Organizations />);
});

test("it should match the snapshot", () => {
    const { asFragment } = render(<Organizations />);
    expect(asFragment()).toMatchSnapshot();
});

// test("it should render the mock API data", () => {
//     const { findByTestId } = render(<Organization />);
//     expect(findByTestId("organization-data")).toBeInTheDocument();
// });
