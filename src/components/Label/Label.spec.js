import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Label from "./Label";

describe("Tests for Label component", () => {
  test("Check snapshot", () => {
    const tree = renderer
      .create(<Label htmlFor="testInput" label="Test Label" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Label matches expected text", () => {
    const label = shallow(<Label htmlFor="testInput" label="Test Label" />);
    expect(label.text()).toEqual("Test Label");
  });

  test("Required label has star", () => {
    const label = shallow(
      <Label htmlFor="testInput" label="Test Label" required />
    );
    expect(label.text()).toEqual("Test Label *");
  });
});
