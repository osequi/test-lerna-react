import React from "react";
import renderer from "react-test-renderer";
import Button from "./Button";
it("Displays the button", function () {
  var component = renderer.create( /*#__PURE__*/React.createElement(Button, null));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Button.test.js.map