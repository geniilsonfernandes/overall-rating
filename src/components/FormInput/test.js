import renderWithTheme from "../../utils/test/renderWithTheme";
import Input from ".";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const props = {
  label: "Review title",
  placeholder: "Example: Easy to use",
  id: "review",
  name: "review"
};

describe("Input", () => {
  it("should render the input correctly and type text hello", () => {
    const onChange = jest.fn();
    renderWithTheme(<Input {...props} onChange={onChange} type="text" />);

    const input = screen.getByPlaceholderText("Example: Easy to use");
    const label = screen.getByText("Review title");

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();

    userEvent.type(input, "hello");

    expect(input).toHaveValue("hello");
    expect(onChange).toBeCalledTimes(5);
  });
  it("should have focus when label click", () => {
    const onChange = jest.fn();
    renderWithTheme(<Input {...props} onChange={onChange} type="text" />);

    const input = screen.getByPlaceholderText("Example: Easy to use");
    const label = screen.getByText("Review title");

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();

    userEvent.click(label);

    expect(input).toHaveFocus();
  });
  it("should be type text and have name ", () => {
    const onChange = jest.fn();
    renderWithTheme(<Input {...props} onChange={onChange} type="text" />);

    const input = screen.getByPlaceholderText("Example: Easy to use");

    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("name", "review");
  });
});
