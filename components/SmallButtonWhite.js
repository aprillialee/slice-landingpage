import styled from "styled-components";

function SmallButtonWhite() {
  return <SmallButtonStyled>LEARN MORE</SmallButtonStyled>;
}

const SmallButtonStyled = styled.button`
  position: fixed;
  bottom: 0;
  margin-bottom: 50px;
  margin-left: 200px;
  border-radius: 5px;
  font-family: "Russo One";
  height: 40px;
  width: 150px;
  background: white;
  outline: none;
  border: none;
`;

export default SmallButtonWhite;
