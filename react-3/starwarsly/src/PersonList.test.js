import React from "react";
import { render } from "@testing-library/react";
import PersonList from "./PersonList";

it("renders without crashing", function() {
  render(<PersonList />);
});