import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/styles/globalStyles";
import theme from "../src/styles/theme";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div style={{ margin: " 0 auto", maxWidth: "1440px" }}>
        <Story />
      </div>
    </ThemeProvider>
  ),
];

export const parameters = {
  backgrounds: {
    default: "white",
    values: [
      { name: "black", value: "#000" },
      { name: "white", value: "#fff" },
    ],
  },
};
