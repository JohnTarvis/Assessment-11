import React from "react";
import { render } from "@testing-library/react";
import Planet from "./Planet";

it("renders without crashing", function() {
  render(<Planet />);
});