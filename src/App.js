import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";
import RatingForm from "./components/RatingForm";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RatingForm />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
