import renderWithTheme from "../../utils/test/renderWithTheme";
import RatingCard from ".";
import { screen } from "@testing-library/react";

import mock from "./mock";

describe("RatingCard", () => {
  it("should render props in RatingCard", () => {
    renderWithTheme(<RatingCard {...mock} />);

    expect(screen.getByText("easy to use")).toBeInTheDocument();
    expect(screen.getByText("By: david")).toBeInTheDocument();
    expect(screen.getByText(/David Grant has been/i)).toBeInTheDocument();
    expect(screen.getByText(/rating/i)).toBeInTheDocument();
    expect(screen.getByText(/2021/i)).toBeInTheDocument();
  });
});
