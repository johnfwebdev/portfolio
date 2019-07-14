import React from "react";
import renderer, { create } from "react-test-renderer";
import BasePage from "./BasePage";

describe("Does the full index/base page load? ", () => {
  test("Loaded in comparison to snapshot", () => {
    const button = create(<BasePage />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});
