import renderWithTheme from "../../utils/test/renderWithTheme";
import UserDisplay from ".";
import { screen } from "@testing-library/react";

const mockProps = {
  user: "jhon",
  excerpt: "Designer",
  src: "jhon.png"
};

describe("UserDisplay", () => {
  it("should render props in UserDisplay", () => {
    renderWithTheme(<UserDisplay {...mockProps} />);

    expect(screen.getByText("jhon")).toBeInTheDocument();
    expect(screen.getByText("Designer")).toBeInTheDocument();
    expect(screen.getByAltText("jhon")).toBeInTheDocument();
    expect(screen.getByAltText("jhon")).toHaveAttribute("src", "jhon.png");
  });
});
