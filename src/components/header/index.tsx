import React, { useContext } from "react";
import Navigator from "../Navigation";
import { Container } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
interface IProps {
  toggleTheme(): void;
}
function Header({ toggleTheme }: IProps) {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <Navigator
        listItem={[
          { title: "Linkedin" },
          { title: "Github" },
          { title: "Email" },
        ]}
      />
      <Switch
        onChange={() => toggleTheme()}
        checked={theme.title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={theme.colors.secundary}
        onColor={theme.colors.primary}
      />
    </Container>
  );
}

export default Header;
