import styled from "styled-components";

export const AppStyle = styled.div`
  display: grid;
  grid-template-columns: 257px 1fr;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundColor};
  &.subscribe {
    grid-template-columns: 1fr;
    padding: 32px;
  }
  .appContainer {
    overflow: hidden;
    align-self: stretch;
    /* height: 100; */
  }
`;
