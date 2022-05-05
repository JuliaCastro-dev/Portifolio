import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { AppRoutes } from "./Routes";
import GlobalStyle from "./styles/global";
import dark from "./styles/theme/dark";
import light from "./styles/theme/light";

function App() {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => setTheme(theme.title === "light" ? dark : light);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
