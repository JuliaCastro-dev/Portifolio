import React from "react";
import * as S from "./styles";
import Header from "./components/molecules/header";
import About from "./components/molecules/about";

function App() {
  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const projects = document.getElementById("projects");
  const contact = document.getElementById("contact");
  return (
    <S.Container>
      <S.InnerBlock id="home">
        <Header
          onClickHome={() =>
            home?.scrollIntoView({ block: "center", behavior: "smooth" })
          }
          onClickAbout={() =>
            about?.scrollIntoView({ block: "center", behavior: "smooth" })
          }
          onClickProjects={() =>
            projects?.scrollIntoView({ block: "center", behavior: "smooth" })
          }
          onClickContact={() =>
            contact?.scrollIntoView({ block: "center", behavior: "smooth" })
          }
        />
      </S.InnerBlock>
      <S.InnerBlock id={"about"}>
        <About />
      </S.InnerBlock>
      <S.InnerBlock id={"projects"}></S.InnerBlock>
      <S.InnerBlock id={"contact"}></S.InnerBlock>
    </S.Container>
  );
}

export default App;
