import renderWithTheme from "../../utils/test/renderWithTheme";
import Star from ".";
import { screen } from "@testing-library/react";

describe("Star", () => {
  it("should toggle star", () => {
    const { container } = renderWithTheme(<Star check={false} />);

    const starButton = container.firstChild;

    expect(starButton).toBeInTheDocument();
    expect(screen.getByTestId("false")).toBeInTheDocument();
  });
});
