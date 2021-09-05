import React from "react";
import { render } from "@testing-library/react";
import CategorySearchForm from "../components/CategorySearchForm";

// mock form data, mock a form submission;

test("it should render without crashing", () => {
    render(<CategorySearchForm />);
});

test("it should match the snapshot", () => {
    const { asFragment } = render(<CategorySearchForm />);
    expect(asFragment()).toMatchSnapshot();
});
