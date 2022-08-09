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
  it("should call function onblur", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    renderWithTheme(
      <>
        <span data-testid="onblur">onblur</span>
        <Input {...props} onChange={onChange} type="text" onBlur={onBlur} />
      </>
    );

    const input = screen.getByPlaceholderText("Example: Easy to use");
    const onblurEl = screen.getByText("onblur");

    expect(input).toBeInTheDocument();

    userEvent.click(input);
    userEvent.type(input, "hello");
    userEvent.click(onblurEl);

    expect(onBlur).toBeCalled();
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
  it("should show erro message", () => {
    const onChange = jest.fn();
    renderWithTheme(
      <Input
        {...props}
        onChange={onChange}
        type="text"
        errorMessage="this a error"
      />
    );

    const error = screen.getByText("this a error");
    expect(error).toBeInTheDocument();
  });
});
