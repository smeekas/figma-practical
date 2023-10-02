import styled from "styled-components";

const HeaderStyle = styled.header`
  padding: 16px 56px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.gray100};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: flex;
  &.subscribe {
    justify-content: center;
    padding: 22px 32px;

    border-bottom: 1px solid ${(props) => props.theme.gray30};
  }
  h1 {
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.005em;
    /* color: ${(props) => props.theme.gray100}; */
    text-align: left;
  }
  .leftNavigation {
    display: flex;
    align-items: center;
    gap: 146px;
  }
  .rightNavigation {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 32px;
  }
  nav {
    display: flex;

    gap: 36px;
  }
  .avatarContainer {
    display: flex;
    align-items: center;
  }
  svg {
    stroke: ${(props) => props.theme.gray100};
  }
`;
export default HeaderStyle;