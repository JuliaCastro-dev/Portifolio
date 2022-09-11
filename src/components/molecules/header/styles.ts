import styled from "styled-components";

const Container = styled.div`
  background-color: transparent;
  overflow-y: hidden;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 70vw;
  height: 50vh;
  margin: 0;
  padding: 0;
`;

const Services = styled.div`
  background-color: transparent;
  overflow-y: hidden;
  overflow-x: hidden;
  margin: 0;
  padding: 0% 0% 0% 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const InnerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: "50%";
  align-self: center;
`;

const Name = styled.text`
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 2vw;
  color: #736ced;
  font-family: sans-serif;
`;

const Description = styled.text`
  font-weight: 200;
  letter-spacing: 1px;
  font-size: 2vw;
  color: #fbfbff;
  font-family: sans-serif;
`;
export { Container, Name, Description, Services, InnerHeader };
