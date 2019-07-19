import React from "react";
import renderer, { create } from "react-test-renderer";
import Logo from "./logo";

describe("Logo appears on page as a link to root uri? ", () => {
  test("it has rendered and is a link to /", () => {
    const logo = create(<Logo />);
    expect(logo.toJSON()).toMatchSnapshot();
  });
});
