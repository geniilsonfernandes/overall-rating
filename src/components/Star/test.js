import renderWithTheme from "../../utils/test/renderWithTheme";
import Star from ".";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Star", () => {
  it("should toggle star", () => {
    const onChange = jest.fn();
    const { container } = renderWithTheme(<Star onCheck={onChange} />);

    const starButton = container.firstChild;

    expect(starButton).toBeInTheDocument();
    expect(screen.getByTestId("false")).toBeInTheDocument();

    userEvent.click(starButton);

    expect(screen.getByTestId("true")).toBeInTheDocument();
  });
});
