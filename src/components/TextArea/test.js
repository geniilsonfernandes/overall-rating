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
});
