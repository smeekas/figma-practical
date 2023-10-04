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
    font-size: ${(props) => props.theme.fontSizeXm};
    font-weight: ${(props) => props.theme.fontWeightLg};
    line-height: 28px;

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
  nav p {
    padding: 12px 24px;
    /* background-color: red; */
    border-radius: 12px;

    transition: all 0.2s;
  }
  nav p:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.lightPrimary};
    color: ${(props) => props.theme.primary};
  }
  .avatarContainer {
    display: flex;
    align-items: center;
  }
  .rightNavigation svg {
    width: 24px;
    height: 24px;
    stroke: ${(props) => props.theme.gray100};
  }
`;
export default HeaderStyle;
