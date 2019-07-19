import React from "react";
import renderer, { create } from "react-test-renderer";
import About from "./aboutPage";

describe("About head is rendered? ", () => {
  test("Is has rendered and matching snapshot", () => {
    const aboutBlock = create(<About />);
    expect(aboutBlock.toJSON()).toMatchSnapshot();
  });
});
