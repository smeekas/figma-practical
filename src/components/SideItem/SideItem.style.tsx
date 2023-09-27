import styled from "styled-components";

export const SideItemStyle = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.005em;
  color: ${(props) => props.theme.gray70};
  &.active {
    color: ${(props) => props.theme.gray100};
  }
`;
