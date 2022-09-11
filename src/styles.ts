import styled from "styled-components";

const Container = styled.div`
  background-color: #191d2b;
  overflow-y: auto;
  overflow-x: hidden;
  width: "100%";
  min-height: 100vh;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const InnerBlock = styled.div`
  min-height: 100vh;
  margin: 0;
  align-items: center;
  display: flex;
`;

export { Container, InnerBlock };
