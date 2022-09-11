import React from "react";

import * as S from "./styles";
import {
  ReactIcon,
  MySqlIcon,
  ReduxIcon,
  JavascriptIcon,
  HtmlIcon,
  CssIcon,
  TypescriptIcon,
} from "../../../icons";
import { Tooltip } from "@mui/material";

function About() {
  return (
    <S.Container>
      <S.ContainerTitle>
        <S.Title style={{ marginRight: "5px" }}> Sobre </S.Title>
      </S.ContainerTitle>
      <S.Content>
        <S.SubTitle> Quem sou eu? </S.SubTitle>
        <S.Description style={{ marginTop: "5px" }}>
          Olá, meu nome é Julia Castro, moro em São Paulo e tenho 18 anos, meu
          foco principal é desenvolvimento Mobile, onde tenho maior conhecimento
          e quero me especializar. Porém também consigo atuar no back-end e no
          desenvolvimento web.
        </S.Description>
        <S.SubTitle style={{ marginTop: "10px", marginBottom: "5px" }}>
          {" "}
          Formação{" "}
        </S.SubTitle>
        <S.Description>
          Graduação em Engenharia de Software - Instituição: FIAP <br />
          Técnico em desenvolvimento de sistemas - Instituição: ETEC{" "}
        </S.Description>

        <S.SubTitle style={{ marginTop: "10px", marginBottom: "5px" }}>
          Tecnologias e Ferramentas
        </S.SubTitle>
        <S.TechnologiesContainer>
          <HtmlIcon width={45} height={45} />

          <CssIcon width={45} height={45} />

          <JavascriptIcon width={45} height={45} />

          <TypescriptIcon width={45} height={45} />

          <ReactIcon width={60} height={60} />

          <ReduxIcon width={40} height={35} />

          <MySqlIcon width={60} height={60} />
        </S.TechnologiesContainer>
      </S.Content>
    </S.Container>
  );
}

export default About;
