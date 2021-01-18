import styled from "styled-components";

function SmallButtonBlack() {
  return <SmallButtonStyled>CONTACT US</SmallButtonStyled>;
}

const SmallButtonStyled = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  margin-bottom: 50px;
  margin-right: 200px;
  border-radius: 5px;
  font-family: "Russo One";
  height: 40px;
  width: 150px;
  color: white;
  background: none;
  outline: none;
  border: 2px solid white;
`;

export default SmallButtonBlack;
