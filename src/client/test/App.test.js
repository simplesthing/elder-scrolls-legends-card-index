import { render, screen } from "@testing-library/react";

import App from "../App";
import React from "react";

describe("<App/>", () => {
  it("renders without error", () => {
    render(<App />);
    expect(
      screen.getByText(/'The Elder Scrolls: Legends' Cards Index/i)
    ).toBeInTheDocument();
  });
});
