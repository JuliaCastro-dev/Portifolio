import {
  ReactOriginal,
  ReduxOriginal,
  TypescriptOriginal,
  JavascriptOriginal,
  Html5Original,
  Css3Original,
  FigmaOriginal,
  JiraOriginal,
  CsharpOriginal,
  GitOriginal,
  GithubOriginal,
} from "devicons-react";
import * as S from "./styles";

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
          e quero me especializar, meu objetivo na programação é me tornar
          engenheira de software conseguindo atuar tanto no front-end como no
          back-end e devops.
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
          <Html5Original size={"2.5vw"} />
          <Css3Original size={"2.5vw"} />
          <JavascriptOriginal size={"2.5vw"} />
          <TypescriptOriginal size={"2.5vw"} />
          <ReactOriginal size={"2.5vw"} />
          <ReduxOriginal size={"2.5vw"} />
          <GitOriginal size={"2.5vw"} />
          <GithubOriginal size={"2.5vw"} />
          <CsharpOriginal size={"2.5vw"} />
          <FigmaOriginal size={"2.5vw"} />
          <JiraOriginal size={"2.5vw"} />
        </S.TechnologiesContainer>
      </S.Content>
    </S.Container>
  );
}

export default About;
