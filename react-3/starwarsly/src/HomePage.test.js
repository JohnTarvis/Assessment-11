import React from "react";
import { render } from "@testing-library/react";
import HomePage from "./HomePage";

it("renders without crashing", function() {
  render(<HomePage />);
});