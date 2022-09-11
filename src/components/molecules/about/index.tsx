import React from "react";
import Button from "../../atoms/button";
import * as S from "./styles";
import {
  ReactIcon,
  HomeIcon,
  PersonIcon,
  ArticleIcon,
  PhoneIcon,
} from "../../../icons";

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
          e quero me especializar. porém também consigo atuar no back-end e no
          desenvolvimento web.
        </S.Description>
        <S.SubTitle style={{ marginTop: "10px", marginBottom: "5px" }}>
          {" "}
          Formação{" "}
        </S.SubTitle>
        <S.Description>
          Técnico em desenvolvimento de sistemas - Instituição: ETEC <br />{" "}
          Graduação em Engenharia de Software - Instituição: FIAP
        </S.Description>
      </S.Content>
    </S.Container>
  );
}

export default About;
