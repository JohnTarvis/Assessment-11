import React from "react";
import { render } from "@testing-library/react";
import Film from "./Film";

it("renders without crashing", function() {
  render(<Film />);
});