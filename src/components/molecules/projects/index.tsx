import React from "react";
import Button from "../../atoms/button";
import * as S from "./styles";
import { HomeIcon, PersonIcon, ArticleIcon, PhoneIcon } from "../../../icons";

function Projects() {
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
      </S.Content>
    </S.Container>
  );
}

export default Projects;
