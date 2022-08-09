import renderWithTheme from "../../utils/test/renderWithTheme";
import RatingForm from ".";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("RatingForm", () => {
  it("should render your components correctly", () => {
    const onSubmit = jest.fn();
    const onClose = jest.fn();
    renderWithTheme(<RatingForm onSubmit={onSubmit} onClose={onClose} />);

    const button = screen.getByText("Submit product review");

    expect(button).toBeInTheDocument();
  });

  it("should not call function onsubmit", () => {
    const onSubmit = jest.fn();
    const onClose = jest.fn();
    renderWithTheme(<RatingForm onSubmit={onSubmit} onClose={onClose} />);

    const button = screen.getByText("Submit product review");
    const termsButton = screen.getByText("I accept the terms and conditions");

    userEvent.click(termsButton);
    userEvent.click(button);

    expect(onSubmit).not.toBeCalled();
  });
  it("should call function onsubmit when form not be errors", () => {
    const onSubmit = jest.fn();
    const onClose = jest.fn();
    renderWithTheme(<RatingForm onSubmit={onSubmit} onClose={onClose} />);

    const button = screen.getByText("Submit product review");
    const termsButton = screen.getByText("I accept the terms and conditions");
    //inputs
    const inputTitle = screen.getByPlaceholderText("Example: Easy to use");
    const inputReview = screen.getByPlaceholderText(/Example: Since I bought/i);
    const inputNickname = screen.getByPlaceholderText("Example: bob27");
    const inputEmail = screen.getByPlaceholderText("Example: your@email.com");

    userEvent.type(inputTitle, "title");
    userEvent.type(inputReview, "review");
    userEvent.type(inputNickname, "bob27");
    userEvent.type(inputEmail, "nickname@gmail.com");

    userEvent.click(termsButton);
    userEvent.click(button);
    //first call
    expect(onSubmit).toBeCalled();
    expect(onClose).toBeCalled();
  });
  it("should not call function onsubmit when form be errors", () => {
    const onSubmit = jest.fn();
    const onClose = jest.fn();
    renderWithTheme(<RatingForm onSubmit={onSubmit} onClose={onClose} />);

    const button = screen.getByText("Submit product review");
    const termsButton = screen.getByText("I accept the terms and conditions");
    //inputs
    const inputTitle = screen.getByPlaceholderText("Example: Easy to use");
    const inputReview = screen.getByPlaceholderText(/Example: Since I bought/i);
    const inputNickname = screen.getByPlaceholderText("Example: bob27");
    const inputEmail = screen.getByPlaceholderText("Example: your@email.com");

    userEvent.type(inputTitle, "title");
    userEvent.type(inputReview, "review");
    userEvent.type(inputNickname, "bob27");
    userEvent.type(inputEmail, "nicknamegmail.com");
    const Emailerror = screen.getByText("Please Enter valid email");

    expect(Emailerror).toBeInTheDocument();
    userEvent.click(termsButton);
    userEvent.click(button);
    expect(onSubmit).not.toBeCalled();
    expect(onClose).not.toBeCalled();
    //first call
  });
  it("should call onclose", () => {
    const onSubmit = jest.fn();
    const onClose = jest.fn();
    renderWithTheme(<RatingForm onSubmit={onSubmit} onClose={onClose} />);

    const button = screen.getByLabelText("close form");

    userEvent.click(button);
    //first call
    expect(onClose).toBeCalled();
  });
});
