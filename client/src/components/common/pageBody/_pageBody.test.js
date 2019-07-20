import React from "react";
import renderer, { create } from "react-test-renderer";
import BasePage from "./pageBody";

describe("Does the full index/base page load? ", () => {
  test("Loaded in comparison to snapshot", () => {
    const index = create(<BasePage />);
    expect(index.toJSON()).toMatchSnapshot();
  });
});
