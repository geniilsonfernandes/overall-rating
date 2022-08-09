import renderWithTheme from "../../utils/test/renderWithTheme";
import Textarea from ".";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const props = {
  label: "Product review",
  placeholder: "i have a dream",
  id: "review",
  name: "review"
};

describe("Textarea", () => {
  it("should render the input correctly and type text 'i liked'", () => {
    const onChange = jest.fn();
    renderWithTheme(<Textarea {...props} onChange={onChange} type="text" />);

    const textarea = screen.getByPlaceholderText("i have a dream");
    const label = screen.getByText("Product review");

    expect(textarea).toBeInTheDocument();
    expect(label).toBeInTheDocument();

    userEvent.type(textarea, "i liked");

    expect(textarea).toHaveValue("i liked");
    expect(onChange).toBeCalledTimes(7);
  });
  it("should call function onblur", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    renderWithTheme(
      <>
        <span data-testid="onblur">onblur</span>
        <Textarea {...props} onChange={onChange} type="text" onBlur={onBlur} />
      </>
    );

    const input = screen.getByPlaceholderText("i have a dream");
    const onblurEl = screen.getByText("onblur");

    expect(input).toBeInTheDocument();

    userEvent.click(input);
    userEvent.type(input, "hello");
    userEvent.click(onblurEl);

    expect(onBlur).toBeCalled();
  });
  it("should have focus when label click", () => {
    const onChange = jest.fn();
    renderWithTheme(<Textarea {...props} onChange={onChange} />);

    const textarea = screen.getByPlaceholderText("i have a dream");
    const label = screen.getByText("Product review");

    expect(textarea).toBeInTheDocument();
    expect(label).toBeInTheDocument();

    userEvent.click(label);

    expect(textarea).toHaveFocus();
  });
  it("should show erro message", () => {
    const onChange = jest.fn();
    renderWithTheme(
      <Textarea {...props} onChange={onChange} errorMessage="this a error" />
    );

    const error = screen.getByText("this a error");
    expect(error).toBeInTheDocument();
  });
});
