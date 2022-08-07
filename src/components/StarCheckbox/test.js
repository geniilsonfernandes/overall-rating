import renderWithTheme from "../../utils/test/renderWithTheme";
import StarIcon from ".";
import { screen } from "@testing-library/react";

describe("StarIcon", () => {
  it("should toggle StarIcon", () => {
    const { container } = renderWithTheme(<StarIcon check={false} />);

    const starButton = container.firstChild;

    expect(starButton).toBeInTheDocument();
    expect(screen.getByTestId("false")).toBeInTheDocument();
  });
});
