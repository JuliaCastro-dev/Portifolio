import React from "react";
import logo from "./logo.svg";
import * as S from "./styles";
import Header from "./components/molecules/header";
import About from "./components/molecules/about";

function App() {
  return (
    <S.Container>
      <S.InnerBlock>
        <Header />
      </S.InnerBlock>
      <S.InnerBlock>
        <About />
      </S.InnerBlock>
    </S.Container>
  );
}

export default App;
