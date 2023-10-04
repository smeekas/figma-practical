import styled from "styled-components";

const CorouselButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: ${(props) =>
    props.theme.mode === "Default" ? props.theme.gray10 : props.theme.gray};
  border: none;
  border-radius: 50%;
  z-index: 111;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.gray};
  box-shadow: 0px 0px 32px 0px #7272723d;
  font-size: ${(props) => props.theme.fontSizeXm};
  color: ${(props) => props.theme.gray100};
  transition: all 0.2s;
  &:hover{
  scale: 1.1;

  }
`;
export default CorouselButton;
