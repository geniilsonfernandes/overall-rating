import renderWithTheme from "../../utils/test/renderWithTheme";
import Radio from ".";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


describe("Input", () => {
  it("should render the radio input and set as checked", () => {
    const onChange = jest.fn();
    renderWithTheme(
      <>
        <Radio name="remcomed" onCheck={onChange} id="yes" value="yes">
          Yes
        </Radio>
        <Radio name="remcomed" onCheck={onChange} id="no" value="no">
          No
        </Radio>
      </>
    );

    const radio1 = screen.getByText("Yes");
    const radio2 = screen.getByText("No");

    expect(radio1).toBeInTheDocument();
    expect(radio2).toBeInTheDocument();

    userEvent.click(radio1);
    expect(radio1.previousSibling).toBeChecked();
    expect(onChange).toBeCalledWith("yes");

    userEvent.click(radio2);
    expect(radio2.previousSibling).toBeChecked();
    expect(onChange).toBeCalledWith("no");
  });
});
