/* eslint-disable react/prop-types */
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import Portal from ".";
import theme from "../../styles/theme";

const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

const root = document.createElement("div");
root.setAttribute("id", "Portal");

window.scrollTo = jest.fn();

describe("Portal", () => {
  it("should render span in portal component", () => {
    customRender(
      <Portal root="Portal">
        <span>foo</span>
      </Portal>,
      {
        container: document.body.appendChild(root)
      }
    );

    expect(screen.getByText(/foo/i)).toBeInTheDocument();
  });
  it("should close portal component", () => {
    const onClose = jest.fn();
    customRender(
      <Portal root="Portal" clickOutSide={onClose}>
        <span>foo</span>
      </Portal>,
      {
        container: document.body.appendChild(root)
      }
    );

    expect(screen.getByText(/foo/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/foo/i).parentNode);

    expect(onClose).toBeCalled();
  });
});
