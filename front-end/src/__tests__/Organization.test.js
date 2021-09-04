import React from "react";
import { render } from "@testing-library/react";
import Organization from "../components/Organization";

test("it should render without crashing", () => {
    render(<Organization />);
});

test("it should match the snapshot", () => {
    const { asFragment } = render(<Organization />);
});
