import "./App.css";
import theme from "./common/styles/theme";
import { ThemeProvider } from "styled-components";
import Welcome from "./components/welcome/Welcome";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Welcome />
    </ThemeProvider>
  );
};

export default App;
