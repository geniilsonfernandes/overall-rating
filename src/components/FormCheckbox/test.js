import renderWithTheme from "../../utils/test/renderWithTheme";
import Checkbox from ".";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Checkbox ", () => {
  it("should render the Checkbox input and set as checked", () => {
    const onChange = jest.fn();
    renderWithTheme(
      <Checkbox name="remcomed" onCheck={onChange} id="yes" value="yes">
        Yes
      </Checkbox>
    );

    const input = screen.getByText("Yes");

    expect(input).toBeInTheDocument();

    userEvent.click(input);
    expect(input.previousSibling).toBeChecked();
    expect(onChange).toBeCalledWith({ remcomed: true });
  });
});
