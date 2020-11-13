import React from "react";
import renderer from "react-test-renderer";
import Button from "./Button";

it("Displays the button", () => {
  const component = renderer.create(<Button />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
