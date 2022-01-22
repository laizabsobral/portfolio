import styled from "styled-components";

export const Box = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
    font-size: 50px;
    color: red;
`;

export const Subtitle= styled.h1`
    font-size: 20px;
    color: red;
`;

export const Button = styled.button`
  padding: 8px;
  font-size: 24px;
  border: none;
  border-radius: 40%;
  margin: 50px 30px 0px 0px;
  background: ${(props) => (props.color ? props.color : 'black')};
`;

export const ButtonAlt = styled(Button)`
  font-family: 'Times New Roman';
`;


