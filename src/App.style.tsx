import styled from "styled-components";

export const AppStyle = styled.div`
  display: grid;
  grid-template-columns: 257px 1fr;
  background-color: ${(props) => props.theme.backgroundColor};
  &.subscribe {
    grid-template-columns: 1fr;
    padding: 32px;
  }
`;
