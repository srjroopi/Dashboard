import "./App.css";
import theme from "./components/common/theme";
import { ThemeProvider } from "styled-components";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hi</h1>
    </ThemeProvider>
  );
};

export default App;
