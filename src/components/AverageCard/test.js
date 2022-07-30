import renderWithTheme from "../../utils/test/renderWithTheme";
import AverageCard from ".";
import { screen } from "@testing-library/react";

describe("AverageCard", () => {
  it("should render props in AverageCard", () => {
    renderWithTheme(<AverageCard rating={4.5} />);

    expect(screen.getByText("4.5")).toBeInTheDocument();
    expect(screen.getByText("Average customer rating")).toBeInTheDocument();
  });
});
