import Header from "../components/header";
import GlobalStyle from "../styles/global";
import { useState } from "react";
import dark from "../styles/theme/dark";
import light from "../styles/theme/light";
import { ThemeProvider } from "styled-components";
export function Main() {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => setTheme(theme.title === "light" ? dark : light);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}
