import "./App.css";
import theme from "./common/styles/theme";
import { ThemeProvider } from "styled-components";
// import CreatePost from "./components/CreatePost";
// import PostsList from "./components/PostsList";
import Welcome from "./components/welcome/Welcome";
import HeroSection from './components/welcome/HeroSection'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Welcome/>
      {/* <div>
      <CreatePost />
      <PostsList />
      </div> */}
      <HeroSection />
    </ThemeProvider>
  );
};

export default App;
