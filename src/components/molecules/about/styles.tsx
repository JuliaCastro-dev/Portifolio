import styled from "styled-components";

const Container = styled.div`
  background-color: transparent;
  overflow-y: hidden;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70vw;
  height: 50vh;
  margin: 0;
  padding: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: "90%";
  width: "100%";
  align-self: center;
`;

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: "10%";
  width: "100%";
  align-self: center;
`;

const TechnologiesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: "100%";
  align-items: center;
  padding-top: 1%;
`;

const Title = styled.text`
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 2vw;
  color: #736ced;
  text-transform: uppercase;
  font-family: sans-serif;
`;

const SubTitle = styled.text`
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 1.5vw;
  color: #736ced;
  font-family: sans-serif;
`;

const Description = styled.text`
  font-weight: 200;
  letter-spacing: 1px;
  font-size: 1.3vw;
  color: #fbfbff;
  font-family: sans-serif;
`;
export {
  Container,
  Title,
  Description,
  Content,
  ContainerTitle,
  SubTitle,
  TechnologiesContainer,
};
