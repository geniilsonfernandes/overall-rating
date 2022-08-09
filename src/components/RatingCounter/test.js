import renderWithTheme from "../../utils/test/renderWithTheme";
import RatingCounter from ".";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("RatingCounter", () => {
  it("should render Rating correctly and return rating counter", () => {
    const onRating = jest.fn();
    renderWithTheme(<RatingCounter onRating={onRating} type="text" />);

    const ratingStars = screen.getByLabelText("rating star").childNodes;

    expect(screen.getByText("Overall rating")).toBeInTheDocument();

    userEvent.click(ratingStars[2]);
    expect(onRating).toBeCalledWith({ rating: 3 });

    userEvent.click(ratingStars[2]);
    expect(onRating).toBeCalledWith({ rating: 0 });
  });
});
